const sourceData1 = require('./data/tempOslo.json'); // Oslo Chart data
const sourceData2 = require('./data/tempTallinn.json'); // Tallinn Chart data
const sourceData3 = require('./data/tempMunich.json'); // Munich Chart data

const TEXTS = {
  ONE: 'Each bar represents a data item.',
  TWO:
    'The height of each bar shows the number of <span class="hT">average temperature</span> in Oslo <span class="hT">(y-axis)</span>.',
  THREE:
    'The horizontal position of each bar represents the <span class="ht">year</span> (x-axis).',
  FOUR:
    'In <span class="hT">2010</span>, the average temperature <span class="hT">4.9°C</span> was captured in <span class="hT">Oslo</span>.',
  FIVE:
    'In <span class="hT">2015</span>, the average temperature in <span class="hT">Tallinn</span> was <span class="hT">7.55 °C</span>.',
  SIX:
    'In <span class="hT">1996</span>, in all three cities <span class="hT">Oslo, Munich and Tallinn</span> the average temperature was lower than the year before and after.'
};

const TEXTGROUPS = {
  g1: 'Reading',
  g2: 'Using'
};

export class ConcreteDataProvider {
  getVizData(chartID) {
    switch (chartID) {
      case 1:
        return this.viz;
      case 2:
        return this.viz2;
      case 3:
        return this.viz3;
      default:
        return this.viz;
    }
  }

  getSingleHintData(hintId) {
    switch (hintId) {
      case 1:
        return this.hint_1;
      case 2:
        return this.hint_2;
      case 3:
        return this.hint_3;
      case 4:
        return this.hint_4;
      case 5:
        return this.hint_5;
      case 6:
        return this.hint_6;
      default:
        return this.hint_1;
    }
  }

  getAllHintData() {
    return this.allHints;
  }

  constructor() {
    // Config for first chart -- here it is Oslo
    this.viz = {
      mark: { type: 'bar' },
      spec: {
        mark: { type: 'bar' },
        encoding: {
          x: { field: 'year', type: 'ordinal', title: 'Year' },
          y: {
            field: 'temp',
            type: 'quantitative',
            title: 'Average temperature in °C'
          }
        },
        title: "Average Temperature progress in Oslo from 1990 to 2018",
      },
      data: {
        values: sourceData1
      }
    };

    // Config for the second chart -- here it is
    this.viz2 = {
      mark: { type: 'bar' },
      spec: {
        mark: { type: 'bar' },
        encoding: {
          x: { field: 'year', type: 'ordinal', title: 'Year' },
          y: {
            field: 'temp',
            type: 'quantitative',
            title: 'Average temperature in °C'
          },
          color: {
            value: "#ff9900"
          }
        },
        title: "Average Temperature progress in Tallinn from 1990 to 2018",
      },
      data: {
        values: sourceData2
      }
    };

    // Config for the third chart -- here it is
    this.viz3 = {
      mark: { type: 'bar' },
      spec: {
        mark: { type: 'bar' },
        encoding: {
          x: { field: 'year', type: 'ordinal', title: 'Year' },
          y: {
            field: 'temp',
            type: 'quantitative',
            title: 'Average temperature in °C'
          },
          color: {
            value: "green"
          }
        },
        title: "Average Temperature progress in Munich, Germany from 1990 to 2018",
      },
      data: {
        values: sourceData3
      }
    };

    this.hint_1 = {
      hintID: 1,
      text: {
        h1: `<div class="vizHint">${TEXTS.ONE}</div>`
      },
      group: `${TEXTGROUPS.g1}`
    };

    this.hint_2 = {
      hintID: 2,
      text: {
        h2: `<div class="vizHint">${TEXTS.TWO}</div>`
      },
      group: `${TEXTGROUPS.g1}`
    };

    this.hint_3 = {
      hintID: 3,
      text: {
        h3: `<div class="vizHint">${TEXTS.THREE}</div>`
      },
      group: `${TEXTGROUPS.g1}`
    };

    this.hint_4 = {
      hintID: 4,
      text: {
        h4: `<div class="vizHint">${TEXTS.FOUR}</div>`
      },
      group: `${TEXTGROUPS.g2}`
    };

    this.hint_5 = {
      hintID: 5,
      text: {
        h5: `<div class="vizHint">${TEXTS.FIVE}</div>`
      },
      group: `${TEXTGROUPS.g2}`
    };

    this.hint_6 = {
      hintID: 6,
      text: {
        h6: `<div class="vizHint">${TEXTS.SIX}</div>`
      },
      group: `${TEXTGROUPS.g2}`
    };

    this.allHints = {
      hintIDs: [
        this.hint_1.hintID,
        this.hint_2.hintID,
        this.hint_3.hintID,
        this.hint_4.hintID,
        this.hint_5.hintID,
        this.hint_6.hintID
      ],
      text: [
        {
          h1: `<div class="vizHint">${TEXTS.ONE}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h2: `<div class="vizHint">${TEXTS.TWO}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h3: `<div class="vizHint">${TEXTS.THREE}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h4: `<div class="vizHint">${TEXTS.FOUR}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h5: `<div class="vizHint">${TEXTS.FIVE}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h6: `<div class="vizHint">${TEXTS.SIX}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
      ]
    };
  }
}
