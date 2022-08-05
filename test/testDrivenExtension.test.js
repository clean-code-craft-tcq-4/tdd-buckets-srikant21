const testExtension = require('../testDrivenExtension');
const {expect} = require('chai');

describe('Analog to Digital converter test cases', function() {
    it('check the power values inputConverter',()=>{
        let res = testExtension.inputConverter(2);
        expect(res).to.be.equal(4);
    })
    
    it('check input of checkInput',()=>{
        let input = [100,150];        
        let res = testExtension.checkInput(input,0,4096);
        expect(res).to.be.deep.equal([100,150]);
    })

    it('checkInput function negative cases ',()=>{
        let input = [100,4097];        
        let res = testExtension.checkInput(input,0,4096);
        expect(res).to.be.deep.equal([ 100, 'Out of Range' ]);
    })

    it('analogToDigitalConverter check output ',()=>{
        let input = [100,4000];        
        let res = testExtension.analogToDigitalConverter(input,12,10);
        expect(res).to.be.deep.equal([ 0, 10 ]);
    })

    it('analogToDigitalConverter check output ',()=>{
        let input = [100,4098];        
        let res = testExtension.analogToDigitalConverter(input,12,10);
        expect(res).to.be.deep.equal([ 0, NaN ]);
    })
})