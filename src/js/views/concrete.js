const sourceData1 = require('./data/tempOslo.json'); // Oslo Chart data
// const sourceData2 = require('./data/');

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

export class ConcreteDataProvider {
  getVizData() {
    return this.viz;
  }

  getHintData(id) {
    switch (id) {
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
          y: { field: 'temp', type: 'quantitative', title: 'Average temperature in °C' },
        },
      },
      data: {
        values: sourceData1
      }
    };

    this.hint_1 = {
      hintID: 1,
      text: {
        one: `<div class"vizHint">${TEXTS.ONE}</div>`
      }
    };

    this.hint_2 = {
      hintID: 2,
      text: {
        two: `<div class"vizHint">${TEXTS.TWO}</div>`
      }
    };

    this.hint_3 = {
      hintID: 3,
      text: {
        three: `<div class"vizHint">${TEXTS.THREE}</div>`
      }
    };

    this.hint_4 = {
      hintID: 4,
      text: {
        four: `<div class"vizHint">${TEXTS.FOUR}</div>`
      }
    };

    this.hint_5 = {
      hintID: 5,
      text: {
        five: `<div class"vizHint">${TEXTS.FIVE}</div>`
      }
    };

    this.hint_6 = {
      hintID: 6,
      text: {
        six: `<div class"vizHint">${TEXTS.SIX}</div>`
      }
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
      text: {
        one: `<div class"vizHint">${TEXTS.ONE}</div>`,
        two: `<div class"vizHint">${TEXTS.TWO}</div>`,
        three: `<div class"vizHint">${TEXTS.THREE}</div>`,
        four: `<div class"vizHint">${TEXTS.FOUR}</div>`,
        five: `<div class"vizHint">${TEXTS.FIVE}</div>`,
        six: `<div class"vizHint">${TEXTS.SIX}</div>`
      }
    };
  }
}
