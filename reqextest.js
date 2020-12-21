const re = new RegExp('^[a-z0-9]+$')
const t1 = 'aAAcds'
const t2 = 'afagasg246'
const t3 = 'Nuvf;'
console.log(re.test('abc'))
console.log(re.test(t2))
console.log(re.test(t3))