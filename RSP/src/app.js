new Vue({
    el: '#app',
    data: {
      myChoice: null,
      comChoice: null,
      count: 3,
      winner: null,
      myLife: 3,
      comLife: 3,
      isSelectable: true,
      logs: [],
      selects: [
          { name: '가위', value: 'scissor' },
          { name: '바위', value: 'rock' },
          { name: '보', value: 'paper' },
      ]
    },
    computed: { 
        myChoiceImg: function() {
            return this.myChoice !== null ? `images/${this.myChoice}.jpg` : 'images/question.jpg'
        },
        comChoiceImg: function() {
            return this.comChoice !== null ? `images/${this.comChoice}.jpg` : 'images/question.jpg'
        },
        myLeftLife: function() {
            return 3 - this.myLife
        },
        comLeftLife: function() {
            return 3 - this.comLife
        }
    },  
    watch: {
        count: function(newVal) {
            if(newVal === 0){

                // 컴퓨터가 가위바위보를 선택하는 부분
                this.selectCom();

                //승패 결정 & 라이프 줄임
                this.whoIsWin();

                 //리셋
                this.count = 3;               
                this.isSelectable = true;

                //로그를 업데이트 하는 부분
                this.updateLogs();
                
            }
        },
        myLife: function(newVal) {
            if(newVal === 0) {
                //게임 종료
                this.endGame('님이 졋습니다')      
            }
        },
        comLife: function(newVal) {
            if(newVal === 0) {
                this.endGame('님이 이겼습니다')              
            }
        }
    },
    methods: {
        startGame() {
            if(this.myChoice === null){
                alert('가위 바위 보 선택하셈')
            } else {    
                //버튼 안보이게 숨김
                this.isSelectable = false;                             
                let countDown = setInterval(()=> {   //callback함수가 this의 위치를 변환시키기 때문에 arrow func()를 사용해야됨 
                    this.count --                    //setInterval(function(), micro sec)  ~초마다 function()을 실행시켜줘
                    if(this.count === 0){
                        clearInterval(countDown);  //setInterval을 멈추기위해, clearInterval의 인자로 넣기 위해 변수로 처리해줌   
                    }                         
                }, 200)
            }
        },
        selectCom() {
            //컴퓨터가 가위바위보를 선택
            let number = Math.random()
            if(number < 0.33){
                this.comChoice = 'rock'
            } else if(number < 0.66){
                this.comChoice = 'scissor'
            } else {
                this.comChoice = 'paper'
            }
        },
        whoIsWin() {
            if(this.myChoice === this.comChoice) this.winner = 'no one'
                else if(this.myChoice === 'rock' && this.comChoice === 'scissor') this.winner = "me"
                else if(this.myChoice === 'scissor' && this.comChoice === 'paper') this.winner = "me"
                else if(this.myChoice === 'paper' && this.comChoice === 'rock') this.winner = "me"
                else if(this.myChoice === 'rock' && this.comChoice === 'paper') this.winner = "com"
                else if(this.myChoice === 'scissor' && this.comChoice === 'rock') this.winner = "com"
                else if(this.myChoice === 'paper' && this.comChoice === 'scissor') this.winner = "com"
                else this.winner = 'error'

                //라이프 차감
                if(this.winner === 'me'){
                    this.comLife --
                } else if(this.winner === 'com') {
                    this.myLife --
                }
        },
        updateLogs() {
            let log = {
                message: `You: ${this.myChoice}, Computer: ${this.comChoice}`,
                winner: this.winner
            }
            this.logs.unshift(log);
        },
        endGame(msg) {
            setTimeout(() => {
                confirm(msg)
                this.myLife = 3
                this.comLife = 3
                this.myChoice = null
                this.comChoice = null
                this.winner = null
                this.logs = []
            }, 100)   
        }
    }
})