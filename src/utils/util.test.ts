import * as utils from "./util";

describe(`Validate Utils`, () => {
    describe(`Validate answer`, () => {
        it(`calculates the correct getTheAnswer`, () => {
          expect(utils.getTheAnswer(31)).toEqual(31);
        });
    });
});
