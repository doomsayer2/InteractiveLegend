let data = require("./data/wahl.json");

//PARTEI NAMEN
const OEVP = "ÖVP";
const SPOE = "SPÖ";
const FPOE = "FPÖ";
const GRUENE = "GRÜNE";
const NEOS = "NEOS";
const SONSTIGE = "Sonstige";

const TEXTS = {
    ONE: "A bar chart is a chart for comparing different categories using rectangular bars. Bars can be horizontally or vertically oriented, nevertheless we need some dimensions first. These are defined by the x and y axis.",
    TWO: "One axis of the chart shows the <b>‚political parties‘ (x-axis)</b>‚ and the other axis shows the <b>‚number of votes received‘ (y-axis)</b>, which is represented as the height (vertical chart) of the bars.",
    THREE: "The bars are distributed along the x axis to their respective <b>political party.</b> However at the moment the information about the color is still missing. The height of the bars along the y-axis shows the <b>number of votes received per political party.</b>",
    FOUR: "The color is another visual attribute for distinguishing between different <b>political parties in Austria.</b> The legend explains the color encoding.",
    FIVE: "The <b>political parties</b> can also be ordered either descending or ascending. In this example the bars are in ascending order."
};

export class ConcreteDataProvider {

    getData(id) {
        switch (id) {
            case 1:
                return this.mode_1;
            case 2:
                return this.mode_2;
            case 3:
                return this.mode_3;
            case 4:
                return this.mode_4;
            case 5:
                return this.mode_5;
            case 6:
                return this.mode_6;
            default:
                return this.mode_1;
        }
    }

    calculatePercentage = (W, G) => {
        let result = (W / G) * 100;
        return result.toFixed(1);
    };

    getColor = (identifier) => {
        if (identifier === OEVP) return "#61C3D0";
        if (identifier === SPOE) return "#ED1C24";
        if (identifier === FPOE) return "#005CAA";
        if (identifier === GRUENE) return "#84B413";
        if (identifier === NEOS) return "#E84188";
        return "#DDDDDD";
    };

    constructor() {
        this.mode_1 = {
            mark: "bar",
            spec: {
                mark: "bar",
                encoding: {
                    x: {field: "party", type: "ordinal", title: "Political party (Austria)", scale: {rangeStep: null}},
                    y: {field: "votes", type: "quantitative", title: "Number of votes received"}
                },
            },
            data: {
                values: []
            },
            mode: 1,
            text: {
                one: `<mark>${TEXTS.ONE}</mark>`
            }
        };

        this.mode_2 = {
            mark: "bar",
            spec: {
                mark: "bar",
                encoding: {
                    x: {field: "party", type: "ordinal", title: "Political party (Austria)", scale: {rangeStep: null}},
                    y: {field: "votes", type: "quantitative", title: "Number of votes received"},
                },
            },
            data: {
                url: data,
                values: [
                    {party: OEVP, votes: 0},
                    {party: SPOE, votes: 0},
                    {party: FPOE, votes: 0},
                    {party: GRUENE, votes: 0},
                    {party: NEOS, votes: 0},
                    {party: SONSTIGE, votes: 0}
                ]
            },
            mode: 2,
            text: {
                one: `${TEXTS.ONE}`,
                two: `<mark>${TEXTS.TWO}</mark>`
            }
        };

        this.mode_3 = {
            mark: "bar",
            spec: {
                mark: "bar",
                encoding: {
                    x: {field: "party", type: "ordinal", title: "Political party (Austria)", scale: {rangeStep: null}},
                    y: {field: "votes", type: "quantitative", title: "Number of votes received"},
                },
            },
            data: {
                url: data,
                values: [
                    {party: OEVP, votes: data.G00000.ÖVP},
                    {party: SPOE, votes: data.G00000.SPÖ},
                    {party: FPOE, votes: data.G00000.FPÖ},
                    {party: GRUENE, votes: data.G00000.GRÜNE},
                    {party: NEOS, votes: data.G00000.NEOS},
                    {
                        party: SONSTIGE,
                        votes: parseInt(data.G00000.KPÖ) + parseInt(data.G00000.EUROPA)
                    }
                ]
            },
            mode: 3,
            text: {
                one: `${TEXTS.ONE}`,
                two: `${TEXTS.TWO}`,
                three: `<mark>${TEXTS.THREE}</mark>`
            }
        };

        this.mode_4 = {
            mark: "bar",
            spec: {
                mark: "bar",
                encoding: {
                    x: {field: "party", type: "ordinal", title: "Political party (Austria)", scale: {rangeStep: null}},
                    y: {field: "votes", type: "quantitative", title: "Number of votes received"},
                    color: {
                        field: "party", type: "nominal", title: "Political party", scale: {
                            range: [
                                this.getColor(FPOE),
                                this.getColor(GRUENE),
                                this.getColor(NEOS),
                                this.getColor(SPOE),
                                this.getColor(SONSTIGE),
                                this.getColor(OEVP)
                            ]
                        }
                    }
                },
            },
            data: {
                url: data,
                values: [
                    {party: OEVP, votes: data.G00000.ÖVP},
                    {party: SPOE, votes: data.G00000.SPÖ},
                    {party: FPOE, votes: data.G00000.FPÖ},
                    {party: GRUENE, votes: data.G00000.GRÜNE},
                    {party: NEOS, votes: data.G00000.NEOS},
                    {
                        party: SONSTIGE,
                        votes: parseInt(data.G00000.KPÖ) + parseInt(data.G00000.EUROPA)
                    }
                ]
            },
            mode: 4,
            text: {
                one: `${TEXTS.ONE}`,
                two: `${TEXTS.TWO}`,
                three: `${TEXTS.THREE}`,
                four: `<mark>${TEXTS.FOUR}</mark>`
            }
        };

        this.mode_5 = {
            mark: "bar",
            spec: {
                mark: "bar",
                encoding: {
                    x: {
                        field: "party",
                        type: "ordinal",
                        sort: {encoding: "y"},
                        title: "Political party (Austria)",
                        scale: {rangeStep: null}
                    },
                    y: {field: "votes", type: "quantitative", title: "Percent of received polling votes"},
                    color: {
                        field: "party", type: "nominal", title: "Political party", scale: {
                            range: [
                                this.getColor(FPOE),
                                this.getColor(GRUENE),
                                this.getColor(NEOS),
                                this.getColor(SPOE),
                                this.getColor(SONSTIGE),
                                this.getColor(OEVP)
                            ]
                        }
                    }
                },
            },
            data: {
                url: data,
                values: [
                    {
                        party: OEVP,
                        votes: this.calculatePercentage(data.G00000.ÖVP, data.G00000.abgegeben),
                        c: this.getColor(OEVP)
                    },
                    {
                        party: SPOE,
                        votes: this.calculatePercentage(data.G00000.SPÖ, data.G00000.abgegeben),
                        c: this.getColor(SPOE)
                    },
                    {
                        party: FPOE,
                        votes: this.calculatePercentage(data.G00000.FPÖ, data.G00000.abgegeben),
                        c: this.getColor(FPOE)
                    },
                    {
                        party: GRUENE,
                        votes: this.calculatePercentage(data.G00000.GRÜNE, data.G00000.abgegeben),
                        c: this.getColor(GRUENE)
                    },
                    {
                        party: NEOS,
                        votes: this.calculatePercentage(data.G00000.NEOS, data.G00000.abgegeben),
                        c: this.getColor(NEOS)
                    },
                    {
                        party: SONSTIGE,
                        votes: this.calculatePercentage(parseInt(data.G00000.KPÖ) + parseInt(data.G00000.EUROPA), data.G00000.abgegeben),
                        c: this.getColor(SONSTIGE)
                    }
                ]
            },
            mode: 5,
            text: {
                one: `${TEXTS.ONE}`,
                two: `${TEXTS.TWO}`,
                three: `${TEXTS.THREE}`,
                four: `${TEXTS.FOUR}`,
                five: `<mark>${TEXTS.FIVE}</mark>`
            }
        };

        this.mode_6 = {
            mark: "bar",
            spec: {
                mark: "bar",
                encoding: {
                    x: {
                        field: "party",
                        type: "ordinal",
                        sort: {encoding: "y"},
                        title: "Political party (Austria)",
                        scale: {rangeStep: null}
                    },
                    y: {field: "votes", type: "quantitative", title: "Percent of received polling votes"},
                    color: {
                        field: "party", type: "nominal", title: "Political party", scale: {
                            range: [
                                this.getColor(FPOE),
                                this.getColor(GRUENE),
                                this.getColor(NEOS),
                                this.getColor(SPOE),
                                this.getColor(SONSTIGE),
                                this.getColor(OEVP)
                            ]
                        }
                    }
                },
            },
            data: {
                url: data,
                values: [
                    {
                        party: OEVP,
                        votes: this.calculatePercentage(data.G00000.ÖVP, data.G00000.abgegeben),
                    },
                    {
                        party: SPOE,
                        votes: this.calculatePercentage(data.G00000.SPÖ, data.G00000.abgegeben),
                    },
                    {
                        party: FPOE,
                        votes: this.calculatePercentage(data.G00000.FPÖ, data.G00000.abgegeben),
                    },
                    {
                        party: GRUENE,
                        votes: this.calculatePercentage(data.G00000.GRÜNE, data.G00000.abgegeben),
                    },
                    {
                        party: NEOS,
                        votes: this.calculatePercentage(data.G00000.NEOS, data.G00000.abgegeben),
                    },
                    {
                        party: SONSTIGE,
                        votes: this.calculatePercentage(parseInt(data.G00000.KPÖ) + parseInt(data.G00000.EUROPA), data.G00000.abgegeben),
                    }
                ]
            },
            mode: 6,
            text: {
                one: `${TEXTS.ONE}`,
                two: `${TEXTS.TWO}`,
                three: `${TEXTS.THREE}`,
                four: `${TEXTS.FOUR}`,
                five: `${TEXTS.FIVE}`
            }
        };
    }
}