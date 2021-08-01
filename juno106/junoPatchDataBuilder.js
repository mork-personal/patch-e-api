function junoPatchDataBuilder() {
    this.junoPatchData = {};
    this.lfoRate = lfoRate => {
        this.junoPatchData.lfoRate = lfoRate;
        return this;
    }
    this.build = () => this.junoPatchData;
}

module.exports = junoPatchDataBuilder;