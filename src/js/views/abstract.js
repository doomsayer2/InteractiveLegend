const TEXTS = {
    ONE: "A bar chart is a chart for comparing different categories using rectangular bars. Bars can be horizontally or vertically oriented, nevertheless we need some dimensions first. These are defined by the x and y axis.",
    TWO: "One axis of the chart shows the categories, time points, etc. and the other axis shows the values in the specific category or time point which is represented as the height (vertical chart) or width (horizontal chart) of the bars.",
    THREE: "The bars are distributed along the x axis to their respective attributes or groups. However at the moment the information about height and color is still missing.",
    FOUR: "The height of the bars along the y axis shows the value for the respective category. The value can be numerical, amount or even percentage.",
    FIVE: "The color is another visual attribute for distinguishing between different categories or subcategories. Each color can also represent one group or entity in the chart. The legend, if present, explains the color encoding."
};

export class AbstractDataProvider {

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

    constructor() {
        this.mode_1 = {
            mark: "bar",
            spec: {
                mark: "bar",
                encoding: {
                    x: {field: "a", type: "ordinal", scale: {rangeStep: null}},
                    y: {field: "b", type: "quantitative"}
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
                    x: {field: "a", type: "ordinal", scale: {rangeStep: null}},
                    y: {field: "b", type: "quantitative"}
                },
            },
            data: {
                values: [
                    {a: "A", b: 0}, {a: "B", b: 0}, {a: "C", b: 0}, {a: "D", b: 0}, {a: "E", b: 0},
                    {a: "F", b: 0}, {a: "G", b: 0}, {a: "H", b: 0}, {a: "I", b: 0}, {a: "J", b: 0}
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
                    x: {field: "a", type: "ordinal", scale: {rangeStep: null}},
                    y: {field: "b", type: "quantitative", "scale": {"domain": [0, 100]}}
                },
            },
            data: {
                values: [
                    {a: "A", b: 50}, {a: "B", b: 50}, {a: "C", b: 50}, {a: "D", b: 50}, {a: "E", b: 50},
                    {a: "F", b: 50}, {a: "G", b: 50}, {a: "H", b: 50}, {a: "I", b: 50}, {a: "J", b: 50}
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
                    x: {field: "a", type: "ordinal", scale: {rangeStep: null}},
                    y: {field: "b", type: "quantitative", "scale": {"domain": [0, 100]}}
                },
            },
            data: {
                values: [
                    {a: "A", b: 80}, {a: "B", b: 48}, {a: "C", b: 86}, {a: "D", b: 88}, {a: "E", b: 13},
                    {a: "F", b: 24}, {a: "G", b: 14}, {a: "H", b: 94}, {a: "I", b: 40}, {a: "J", b: 83}
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
                    x: {field: "a", type: "ordinal", scale: {rangeStep: null}},
                    y: {field: "b", type: "quantitative", "scale": {"domain": [0, 100]}},
                    color: {field: "category", type: "nominal"}
                },
            },
            data: {
                values: [
                    {category: "2", a: "A", b: 80}, {category: "2", a: "B", b: 48}, {
                        category: "2",
                        a: "C",
                        b: 86
                    }, {category: "1", a: "D", b: 88}, {category: "3", a: "E", b: 13},
                    {category: "2", a: "F", b: 24}, {category: "2", a: "G", b: 14}, {
                        category: "1",
                        a: "H",
                        b: 94
                    }, {category: "1", a: "I", b: 40}, {category: "3", a: "J", b: 83}
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
                    x: {field: "a", type: "ordinal", scale: {rangeStep: null}},
                    y: {field: "b", type: "quantitative", "scale": {"domain": [0, 100]}},
                    color: {field: "category", type: "nominal"}
                },
            },
            data: {
                values: [
                    {category: "2", a: "A", b: 80}, {category: "2", a: "B", b: 48}, {
                        category: "2",
                        a: "C",
                        b: 86
                    }, {category: "1", a: "D", b: 88}, {category: "3", a: "E", b: 13},
                    {category: "2", a: "F", b: 24}, {category: "2", a: "G", b: 14}, {
                        category: "1",
                        a: "H",
                        b: 94
                    }, {category: "1", a: "I", b: 40}, {category: "3", a: "J", b: 83}
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