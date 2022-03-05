///<reference types="cypress"/>

it('Um teste externo', ()=> {})

describe('Um grupo de testes', ()=> {
    it('Um teste interno', ()=> {
        const obj = {
            a : 1,
            b : 2
        }

        expect(obj).equal(obj)
        expect(obj).equals(obj)
        expect(obj).include({a:1})
        expect(obj).include({a:1, b:2})
        expect(obj).not.to.be.empty
    })

    it('Mais um teste interno', ()=> {
        
    })

    describe('Um subgrupo de testes', ()=> {
        it('Um teste em um subgrupo', ()=> {
    
        })
    
        it('Mais um teste em um subgrupo', ()=> {
            
        })
    })

    it('Um teste interno', ()=> {

    })

    it.skip('Mais um teste interno', ()=> {
        
    })

    it('Um teste interno', ()=> {

    })

    it.skip('Mais um teste interno', ()=> {
        
    })
})