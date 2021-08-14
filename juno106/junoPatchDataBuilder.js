function junoPatchDataBuilder() {
    this.junoPatchData = {};
    this.lfoRate = lfoRate => {
        this.junoPatchData.lfoRate = lfoRate;
        return this;
    }
    this.lfoDelayTime = lfoDelayTime => {
        this.junoPatchData.lfoDelayTime = lfoDelayTime;
        return this;
    }
    this.lfoPitchModulation = lfoPitchModulation => {
        this.junoPatchData.lfoPitchModulation = lfoPitchModulation;
        return this;
    }
    this.pulseWidthModulation = pulseWidthModulation => {
        this.junoPatchData.pulseWidthModulation = pulseWidthModulation;
        return this;
    }
    this.noiseLevel = noiseLevel => {
        this.junoPatchData.noiseLevel = noiseLevel;
        return this;
    }
    this.vcfFreq = vcfFreq => {
        this.junoPatchData.vcfFreq = vcfFreq;
        return this;
    }
    this.vcfRes = vcfRes => {
        this.junoPatchData.vcfRes = vcfRes;
        return this;
    }
    this.vcfEnv = vcfEnv => {
        this.junoPatchData.vcfEnv = vcfEnv;
        return this;
    }
    this.vcfLfo = vcfLfo => {
        this.junoPatchData.vcfLfo = vcfLfo;
        return this;
    }
    this.vcfKeyboardTracking = vcfKeyboardTracking => {
        this.junoPatchData.vcfKeyboardTracking = vcfKeyboardTracking;
        return this;
    }
    this.vcaLevel = vcaLevel => {
        this.junoPatchData.vcaLevel = vcaLevel;
        return this;
    }
    this.envA = envA => {
        this.junoPatchData.envA = envA;
        return this;
    }
    this.envD = envD => {
        this.junoPatchData.envD = envD;
        return this;
    }
    this.envS = envS => {
        this.junoPatchData.envS = envS;
        return this;
    }
    this.envR = envR => {
        this.junoPatchData.envR = envR;
        return this;
    }
    this.subOscillatorLevel = subOscillatorLevel => {
        this.junoPatchData.subOscillatorLevel = subOscillatorLevel;
        return this;
    }
    this.octaveLevel = octaveLevel => {
        this.junoPatchData.octaveLevel = octaveLevel;
        return this;
    }
    this.isPulseOn = isPulseOn => {
        this.junoPatchData.isPulseOn = isPulseOn;
        return this;
    }
    this.isSawOn = isSawOn => {
        this.junoPatchData.isSawOn = isSawOn;
        return this;
    }
    this.isChorusOn = isChorusOn => {
        this.junoPatchData.isChorusOn = isChorusOn;
        return this;
    }
    this.chorusLevel = chorusLevel => {
        this.junoPatchData.chorusLevel = chorusLevel;
        return this;
    }
    this.isPwmControlledByLFO = isPwmControlledByLFO => {
        this.junoPatchData.isPwmControlledByLFO = isPwmControlledByLFO;
        return this;
    }
    this.isVcaControlledByEnvelope = isVcaControlledByEnvelope => {
        this.junoPatchData.isVcaControlledByEnvelope = isVcaControlledByEnvelope;
        return this;
    }
    this.isVcfEnvelopePolarityPositive = isVcfEnvelopePolarityPositive => {
        this.junoPatchData.isVcfEnvelopePolarityPositive = isVcfEnvelopePolarityPositive;
        return this;
    }
    this.highPassFilterLevel = highPassFilterLevel => {
        this.junoPatchData.highPassFilterLevel = highPassFilterLevel;
        return this;
    }
    this.build = () => this.junoPatchData;
}

module.exports = junoPatchDataBuilder;