package myPack

import "math"

func Divisors(n int) int {
	divisorsCount := 0
	sqrtN := int(math.Sqrt(float64(n)))

	for i := 1; i <= sqrtN; i++ {
		if n%i == 0 {
			if n/i == i {
				// Если i равно квадратному корню из n, считаем его только один раз
				divisorsCount += 1
			} else {
				// Иначе считаем оба делителя: i и n/i
				divisorsCount += 2
			}
		}
	}

	return divisorsCount

}
