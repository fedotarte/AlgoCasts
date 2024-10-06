package main

import (
	"fmt"
	"math"
	"time"
)

func main() {
	//TIP Press <shortcut actionId="ShowIntentionActions"/> when your caret is at the underlined or highlighted text
	// to see how GoLand suggests fixing it.
	s := "gopфher" // строка - слайс из рун? с указателем длинной, в кодировке UTF-8, руна - алиас для int32, 4 - нет, только если двигаться по байтам

	myMap := map[string][]int{
		"a": {1},
		"b": {2},
		"c": {3},
	}

	myMap["a"] = []int{1}
	myMap["b"] = []int{1}

	for i, v := range s {
		fmt.Println(i, string(v))
	}

	var numbers [5]int = [5]int{1, 2, 3, 4, 5}

	nums := []int{1, 2, 3, 4, 5}

	fmt.Println(numbers)

	fmt.Println(nums)

	fmt.Println("Hello and welcome, %s!", s)

	//осздание каналы
	strChannel := make(chan string)

	go testFn(strChannel)
	sqrtN := int(math.Sqrt(float64(54)))

	fmt.Println(sqrtN)

	for i := 1; i <= 5; i++ {
		//TIP You can try debugging your code. We have set one <icon src="AllIcons.Debugger.Db_set_breakpoint"/> breakpoint
		// for you, but you can always add more by pressing <shortcut actionId="ToggleLineBreakpoint"/>. To start your debugging session,
		// right-click your code in the editor and select the <b>Debug</b> option.
		fmt.Println("i =", 100/i)
	}

	fmt.Println(len(nums))

	newSlice := append(nums, 42)

	fmt.Println(&newSlice, &nums) //

	fmt.Println(newSlice)

	time.Sleep(1000 * time.Millisecond)

	strChannel <- "hello!"

	time.Sleep(1000 * time.Millisecond)

	strChannel <- "good bye" // ошибка дедлока

}

func testFn(ch chan string) {
	data := <-ch //ожидаем данные из канала, подписываемся на сообщ
	fmt.Println(data)
}

//TIP See GoLand help at <a href="https://www.jetbrains.com/help/go/">jetbrains.com/help/go/</a>.
// Also, you can try interactive lessons for GoLand by selecting 'Help | Learn IDE Features' from the main menu.
