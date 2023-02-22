import styles from '../styles/chat.module.css';
import { useEffect, Component } from 'react';
import { startGame } from '../api/startGame.jsx';

const loremIpsum = "The name of the game is cribbage. First one to blink, loses! Cribbage is a game for two players or four players in two partnerships. The game is played with a standard deck of 52 cards. The objective of the game is to be the first player to reach 121 points. Points are earned by forming certain combinations of cards and by pegging. The first player to reach 121 points is the winner. But this is a different game. We're not playing a normal game of cribbage. In fact, our game doesn't use cards at all. It's much more chaotic than that. Here are the rules. The game is played on a board that has 61 squares. Two players each take 15 pieces of their own color, and place them on the 61 squares in any way they choose. The goal is to be the first to have all 15 of your pieces in a row. The players take turns moving their pieces one at a time, and try to block their opponent's pieces from forming a row. If a player has all 15 pieces in a row, they win the game. If a player blinks or looks away while the other player is making their move, they lose the game. What will be the consequence for winning, you ask? Aye, read on, if you dare... The winner of the game earns bragging rights and the right to gloat in the loser's face. There is no prize or reward for winning other than the satisfaction of knowing you bested your opponent. The loser, however, must do whatever the winner says. It could range from making the loser do a silly dance, to buying the winner a milkshake, to doing any kind of task the winner desires. So, be sure to choose your opponent wisely!"

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: '',
        }

        if (this.props.startGame) {
            this.props.setStartGame(false);
            this.state = {} //
            startGameResponse = fetchStartGame(
                this.props.playerName, this.props.killer, setState
            )
            this.state = {
                playerName: this.props.playerName,
                killer: this.props.killer,
                game_id: startGameResponse.game_id,
                // TODO: Maybe combine history and action_prompt on the backend
                history: startGameResponse.history + startGameResponse.action_prompt,
                prompt_type: startGameResponse.prompt_type,
                next_request: startGameResponse.next_request,
            }
        } 
    }

    // Various Update methods
    componentDidUpdate() {
        // Lifecycle method, learn them
        // Rerenders every time this component's state is changed
    }

    render() {(
        <div className={styles.window}>
            <ChatHistory/>
            {/* <ChatHistory history={this.state.history + this.state.next_prompt}/> */}
            {ChatInput()}
        </div>
    )}
}

class ChatHistory extends Component {
    constructor(props) {
        this.state = {
            history_list: ['example text']
            // history_list: this.props.history.split('\n')
        }
    }

    addHistory(text) {
        this.setState({
            history_list: prevState.history_list.concat(text.split('\n'))
        })
    }

    render() {
        <div>
            {this.state.history_list.map((message, index) => (
                <div key={index}>{message}</div>
            ))}
        </div>
    }
}

function ChatInput() {
    return (
        <div className={styles.input}>
            <input></input>
            <button>send</button>
        </div>
    )
}

function get_diff(oldHistory, newHistory) {
    return newHistory.replace(oldHistory, '');
}

