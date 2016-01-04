/**
 * Created by user on 2015/12/21.
 */

QuestionList = [
    {
        questionName : "我的出生年",
        type : 0,   // 0:单选 1:多选
        choices : [
            {
                choiceContent : "1980",
                correctness : 0 // 0:错(非常讨厌) 1:对(非常喜欢) 2:一般般(不好不坏) 3:有那么点喜欢 4:有那么点讨厌
            },

            {
                choiceContent : "1984",
                correctness : 1
            },

            {
                choiceContent : "1988",
                correctness : 0
            }
        ]
    },

    {
        questionName : "我喜欢的有兴趣的",
        type : 1,   // 0:单选 1:多选
        choices : [
            {
                choiceContent : "迟到",
                correctness : 0 // 0:错(非常讨厌) 1:对(非常喜欢) 2:一般般(不好不坏) 3:有那么点喜欢 4:有那么点讨厌
            },

            {
                choiceContent : "读书",
                correctness : 1
            },

            {
                choiceContent : "音乐",
                correctness : 1
            },

            {
                choiceContent : "测试内容22222",
                correctness : 2
            },

            {
                choiceContent : "测试内容33333",
                correctness : 3
            },

            {
                choiceContent : "测试内容44444",
                correctness : 4
            }
        ]
    }
];

window.onload = function()
{
    ;(function(root){
    alert("Application start");

    //console.log(root.QuestionList);
    var GlobalGameManager = new Class({
        initialize : function()
        {
            this.qgf = new NS_YuJian.questionGame.QuestionGameFacade();
        }
    });

    root.ggm = new GlobalGameManager();
    ggm.qgf.questionProxy.initializeQuestionList( QuestionList );
    ggm.qgf.initializeStart();
    console.log(ggm);
    //ggm.questionProxy.questionList[0].choices[0].setRight(true);

})(this);
}

