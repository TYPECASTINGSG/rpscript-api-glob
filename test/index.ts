import {expect} from 'chai';
import m from 'mocha';

import RPSGlob from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('Glob', () => {

  m.it('should show relevant files', async function () {
    let glob = new RPSGlob;

    let output = await glob.glob(new RpsContext,{},"**/*.ts");
    
    console.log(output);

  }).timeout(0);

})
