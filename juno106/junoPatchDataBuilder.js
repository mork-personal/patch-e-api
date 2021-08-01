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
    this.dcoLfo = dcoLfo => {
        this.junoPatchData.dcoLfo = dcoLfo;
        return this;
    }
    this.dcoPwm = dcoPwm => {
        this.junoPatchData.dcoPwm = dcoPwm;
        return this;
    }
    this.dcoNoise = dcoNoise => {
        this.junoPatchData.dcoNoise = dcoNoise;
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
    this.vcfKybd = vcfKybd => {
        this.junoPatchData.vcfKybd = vcfKybd;
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
    this.dcoSub = dcoSub => {
        this.junoPatchData.dcoSub = dcoSub;
        return this;
    }
    this.switchesOne = switchesOne => {
        this.junoPatchData.switchesOne = switchesOne;
        return this;
    }
    this.switchesTwo = switchesTwo => {
        this.junoPatchData.switchesTwo = switchesTwo;
        return this;
    }
    this.build = () => this.junoPatchData;
}

module.exports = junoPatchDataBuilder;