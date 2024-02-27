import lodash, {Dictionary} from 'lodash'
import {Buffer} from 'buffer'

type CodingDictionary = Dictionary<CodingFunction>

interface CodingFunction {
    encode: (str: string) => string
    decode: (str: string) => string
}

export const codingDictionary: CodingDictionary = {
    base64: {
        encode: (str: string) => (Buffer.from(str).toString('base64')),
        decode: (str: string) => (Buffer.from(str, 'base64').toString())
    }
}

export const coding = (encoding?: string): CodingFunction => {
    const defaultCodingFunction = codingDictionary['base64']
    return !lodash.isEmpty(encoding) ? defaultCodingFunction
        : lodash.get(codingDictionary, encoding, defaultCodingFunction)
}
