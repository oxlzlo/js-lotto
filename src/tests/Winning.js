import Lotto from './Lotto';
import { WinningRank, WinningPrize } from './constant';

class Winning {
	constructor(userInputWinningNumber) {
		this.lotto = new Lotto();
		this.userInputWinningNumber = userInputWinningNumber;
		this.createLottoNumbers = this.lotto.createLottoNumbers();
		this.createBonusNumber = this.lotto.createBonusNumber();
	}

	checkWinning() {
		const matches = this.userInputWinningNumber.filter(number => this.createLottoNumbers.includes(number)).length;
		const bonusMatches = this.userInputWinningNumber.includes(this.createBonusNumber);

		if (matches === 6) return WinningRank.FIRST_PLACE;
		if (matches === 5 && bonusMatches) return WinningRank.SECOND_PLACE;
		if (matches === 5) return WinningRank.THIRD_PLACE;
		if (matches === 4) return WinningRank.FOURTH_PLACE;
		if (matches === 3) return WinningRank.FIFTH_PLACE;
		return 0;
	}

	calculatePrize() {
		const matches = this.userInputWinningNumber.filter(number => this.createLottoNumbers.includes(number)).length;
		const bonusMatches = this.userInputWinningNumber.includes(this.createBonusNumber);

		switch (matches) {
			case 3:
				return WinningPrize.FIFTH_PRIZE;
			case 4:
				return WinningPrize.FOURTH_PRIZE;
			case 5:
				return bonusMatches ? WinningPrize.SECOND_PRIZE : WinningPrize.THIRD_PRIZE;
			case 6:
				return WinningPrize.FIRST_PRIZE;
		}
	}
}

export default Winning;
