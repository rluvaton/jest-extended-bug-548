
test('regular matcher', () => {
	expect([1, 2]).toIncludeSameMembers([2, 1])
});

test('InverseAsymmetricMatchers', () => {
	expect({
		data: [1, 2]
	}).toEqual({

		// I get here:
		// Property 'toIncludeSameMembers' does not exist on type 'ExpectStatic'
		data: expect.toIncludeSameMembers([2, 1])
	})
});
