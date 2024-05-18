import { ConstantNumbers } from './constant';

class Lotto {
	price = ConstantNumbers.LOTTO_PRICE;
	quantity;
	purchaseAmount;

	lottoNumbers = Array.from(
		{ length: ConstantNumbers.MAX_NUMBER - ConstantNumbers.MIN_NUMBER + 1 },
		(_, i) => i + ConstantNumbers.MIN_NUMBER
	);

	constructor(quantity) {
		this.quantity = quantity;
	}

	purchase(purchaseAmount) {
		// 구매 금액을 로또 가격으로 나눈 몫이 quantity
		this.quantity = purchaseAmount / this.price;
		return this.quantity;
	}

	createLottoNumbers() {
		return [...this.lottoNumbers].sort(() => Math.random() - 0.5).slice(0, 6);
	}
}

export default Lotto;
