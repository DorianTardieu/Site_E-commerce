import { Component, OnInit } from '@angular/core';
import { MyQuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  currentQuestionIndex: number = 0;
  timerDisplay: number = 15;
  timer: any;
  isTimerRunning: boolean = false;
  score: number = 0;
  quizFinished: boolean = false;

  questions: any[] = [];

  constructor(private quizService: MyQuizService) { }

  ngOnInit(): void {
    this.loadQuestions();
    this.startTimer();
  }

  loadQuestions(): void {
    this.quizService.getQuizQuestions().subscribe(
      (data) => {
        this.questions = data.results.map((question: any) => {
          return {
            ...question,
            answered: false,
            userAnswer: null
          };
        });
      },
      (error) => {
        console.log('Error fetching quiz questions:', error);
      }
    );
  }
  startTimer() {
    if (!this.isTimerRunning) {
      this.timer = setInterval(() => {
        this.timerDisplay--;
        if (this.timerDisplay === 0) {
          this.nextQuestion();
        }
      }, 1000);
      this.isTimerRunning = true;
    }
  }

  stopTimer() {
    clearInterval(this.timer);
    this.isTimerRunning = false;
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this.timerDisplay = 15;
    if (this.currentQuestionIndex === this.questions.length) {
      this.finishQuiz();
    } else {
      this.startTimer();
    }
  }

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.timerDisplay = 10;
    }
  }

  checkAnswer(answer: boolean) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (answer === (currentQuestion.correct_answer === 'True')) {
      this.score++;
    }
    this.nextQuestion();
  }

  finishQuiz() {
    this.stopTimer();
    this.quizFinished = true;
  }

  restartQuiz() {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.timerDisplay = 10;
    this.timer = null;
    this.isTimerRunning = false;
    this.score = 0;
    this.quizFinished = false;
    this.ngOnInit();
  }

}
