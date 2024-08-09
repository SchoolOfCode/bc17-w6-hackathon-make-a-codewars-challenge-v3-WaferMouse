import { expect, test } from 'vitest';
import { treeFinder } from './main.js';

test('find the tree', () => {
  expect(treeFinder(
`dksh1sadj
skl398alo
fg10749gh
b2047374v
339206120
folw4ldrw
qw10934lm
lwd563fdm`)).toBe(
`    #    
   ###   
  #####  
 ####### 
#########
    #    
  #####  
   ###   `
    )
})