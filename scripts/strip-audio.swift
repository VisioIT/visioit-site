import AVFoundation
import Foundation

guard CommandLine.arguments.count == 3 else {
    fputs("Usage: strip-audio.swift input.mp4 output.mp4\n", stderr)
    exit(2)
}

let input = URL(fileURLWithPath: CommandLine.arguments[1])
let output = URL(fileURLWithPath: CommandLine.arguments[2])
let asset = AVURLAsset(url: input)
let composition = AVMutableComposition()

guard
    let sourceVideo = asset.tracks(withMediaType: .video).first,
    let targetVideo = composition.addMutableTrack(
        withMediaType: .video,
        preferredTrackID: kCMPersistentTrackID_Invalid
    )
else {
    fputs("No video track found.\n", stderr)
    exit(3)
}

do {
    try targetVideo.insertTimeRange(
        CMTimeRange(start: .zero, duration: asset.duration),
        of: sourceVideo,
        at: .zero
    )
    targetVideo.preferredTransform = sourceVideo.preferredTransform
} catch {
    fputs("Unable to copy video track: \(error)\n", stderr)
    exit(4)
}

try? FileManager.default.removeItem(at: output)
guard let exporter = AVAssetExportSession(asset: composition, presetName: AVAssetExportPresetPassthrough) else {
    fputs("Unable to create export session.\n", stderr)
    exit(5)
}

exporter.outputURL = output
exporter.outputFileType = .mp4
exporter.shouldOptimizeForNetworkUse = true

let semaphore = DispatchSemaphore(value: 0)
exporter.exportAsynchronously { semaphore.signal() }
semaphore.wait()

guard exporter.status == .completed else {
    fputs("Export failed: \(exporter.error?.localizedDescription ?? "unknown error")\n", stderr)
    exit(6)
}
