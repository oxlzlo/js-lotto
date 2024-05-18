import Lotto from '../src/tests/Lotto';
import { ErrorMessages } from '../src/tests/error';

describe('로또 기능 테스트', () => {
	test('로또 1장의 가격은 1000원이다', () => {
		// given
		const lotto = new Lotto();

		// when
		const price = lotto.price;

		// then
		expect(price).toBe(1000);
	});

	test('로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.', () => {
		// given
		const lotto = new Lotto();

		// when
		const quantity = lotto.purchase(5000);

		// then
		expect(quantity).toBe(5);
	});

	test('로또 당첨 번호는 1 ~ 45 사이의 무작위 수 중 중복되지 않는 6개이다.', () => {
		// given
		const lotto = new Lotto();

		// when
		const lottoNumbers = lotto.createLottoNumbers();

		// then
		expect(lottoNumbers.length).toBe(6); // 번호의 개수가 6개인지
		expect(new Set(lottoNumbers).size).toBe(6); // 6개의 번호가 중복되지 않는지
		lottoNumbers.forEach(num => {
			expect(num).toBeGreaterThanOrEqual(1); // 최소 1인지
			expect(num).toBeLessThanOrEqual(45); // 최대 45인지
		});
	});

	test('보너스 번호는 당첨 번호와 중복될 수 없다', () => {
		// given
		const lotto = new Lotto();

		// when
		const lottoNumbers = lotto.createLottoNumbers();
		const bonusNumber = lottoNumbers.slice(0, 1);

		// then
		if (lottoNumbers.includes(bonusNumber)) {
			throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다');
		}
	});
});
