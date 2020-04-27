let myQuiz = [
			{
				question: "Ai là người đã đặt tên cho dòng sông?",
				answer: {
					a: 'Hoàng Phủ Ngọc Tường',
					b: 'Không ai cả',
					c: 'Câu hỏi thiếu dữ kiện' 
				},
				correctAnswer: 'c'
			},
			{
				question: "Tháp Effiel cao bao nhiêu mét?",
				answer: {
					a: '500',
					b: '300',
					c: '600'
				},
				correctAnswer: 'b'
			},
			{
				question: "Sông Nho Quế chảy qua địa phận nào của Việt Nam?",
				answer: {
					a: 'Hà Giang',
					b: 'Bắc Cạn',
					c: 'Quảng Bình'
				},
				correctAnswer: 'a'
			},
			{
				question: "Nhân vật nào đã nói câu:'I love you 3000' trong bộ phim Avengers:End Game?",
				answer: {
					a: 'Tony Stark',
					b: 'Pepper',
					c: 'Con gái của Tony Stark'

				},
				correctAnswer: 'c'
			},
			{
				question: "Từ nào còn thiếu trong câu:'...ơi! Mở ra'?",
				answer: {
					a: 'Đỗ đen',
					b: 'Vừng',
					c: 'Lạc'
				},
				correctAnswer: 'b'
			}
		];
let quizContainer = document.getElementById('quiz');
let resultContainer = document.getElementById('result');
let submitButton = document.getElementById('submit');		
generateQuiz(myQuiz, quizContainer, resultContainer, submitButton);
 function generateQuiz(questions, quizContainer, resultContainer, submitButton) {
	function showQuestions(questions, quizContainer) {
		let output = [];
		let answer;

		for (let i = 0; i < questions.length; i++) {
			answer = [];
			for(letter in questions[i].answer) {
				answer.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answer[letter]
						+ '<label>'
					);
			}
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answer">' + answer.join('') + '</div>'
				);
		}
		quizContainer.innerHTML = output.join();
	}
	function showResults(questions, quizContainer, resultContainer) {
		let answerContainer = quizContainer.querySelectorAll('.answer');
		let userAnswer = '';
		let numCorrect = 0;

		for(let i = 0; i < questions.length; i++) {
			userAnswer = (answerContainer[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			if (userAnswer===questions[i].correctAnswer) {
				numCorrect++;
				answerContainer[i].style.color = 'lightgreen';
			} else {
				answerContainer[i].style.color = 'red';
			}			
		}
		resultContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}
	showQuestions(questions,quizContainer);
	// user click submit, show result
	submitButton.onclick = function() {
		showResults(questions, quizContainer, resultContainer);
	}
}
