import { PlyParser } from './PlyParser.js';
import { fetchWithProgress } from '../Util.js';

export class PlyLoader {

    constructor() {
        this.splatBuffer = null;
    }

    loadFromURL(fileName, onProgress, compressionLevel, minimumAlpha, blockSize, bucketSize) {
        return fetchWithProgress(fileName, onProgress).then((plyFileData) => {
            const splatArray = new PlyParser(plyFileData).parseToUncompressedSplatArray();
            const splatBufferGenerator = GaussianSplats3D.SplatBufferGenerator.getStandardGenerator(minimumAlpha,
                                                                                                    compressionLevel,
                                                                                                    blockSize, bucketSize);
            return splatBufferGenerator.generateFromUncompressedSplatArray(splatArray);
        });
    }

}
