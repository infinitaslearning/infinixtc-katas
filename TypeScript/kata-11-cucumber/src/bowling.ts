export function game() {
	let score = 0;
	return {
		roll(pins: number): void {
			score += pins;
		},
		getScore(): number {
			return score;
		},
	};
}
