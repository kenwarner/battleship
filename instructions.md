# Software Engineering Assignment

As part of our hiring process we would like to get a sense of your technical abilities and how you go about writing software. We would like you to spend approximately 2 hours total on this assignment. Under no circumstances should you spend longer than 4 hours. There is far more work involved than is reasonable to complete in the allotted time: **we do not expect you to finish**. We would like to see how you work, what corners you cut, what polish you apply, where you focus, and the overall approach you take as part of this assignment. (You are welcome to break up the 2 hours of work however you see fit: all in one go, two one-hour sessions, four half-hour sessions, etc.)

## Instructions

We would like you to implement our version of the game battleship (see rules below). This is a two-player game and your game should support two players using separate computers. Your solution does not need to scale beyond two players. We have provided you with access to this GitHub repo which we would like you to use both while developing and for the final submission. We would like you to have your final submission within 72 hours. You are welcome to use any platforms and languages you believe suitable. If you believe we may find your choices non-standard or non-obvious, documentation of the rationale behind the decisions will be appreciated.

You are welcome to make use of open source libraries, provided these libraries do not provide solutions to the game of Battleship. For example, using Java Swing to manage your UI components or Express as a scaffold for your web service are both allowed while using an existing Battleship library would be forbidden. Using open source libraries is permitted as long as you use an explicit external dependency management system (as appropriate for your choice of technology). Do not plagiarize or copy/paste code without attribution.

You may also use resources on the Internet (Google, StackOverflow, etc) but you may not ask for explicit assistance from any other individual with any aspect of this assignment. This means if you run into a problem starting an http server in Golang, you may consult existing questions on Stackoverflow but may **not** post your own question (nor ask a friend for help). Needless to say, do not pair program.

Document any assumptions or shortcuts you take; feel free to simplify the problem if it helps.

### Game Rules

#### Setup
1. Each player has a 10x10 board. Players do not know the state of their opponent’s board.
1. Each player places five ships: Carrier (occupies 5 spaces), Battleship (4), Cruiser (3), Submarine (3), and Destroyer (2).
1. Ships are placed vertically or horizontally on the board and may not overlap or be adjacent to another ship (touching on the diagonal is allowed).

#### Game Play
1. Prior to attacking, each player may move one undamaged ship one square along the axis the ship is placed on, or may rotate the ship 90 degrees along either end of the ship. Any movement which would result in an invalid board position (overlapping ships, adjacent ships, or off-the-board ships) is prohibited. Damaged ships cannot move or rotate. An example rotation:

![screenshot 2017-09-11 16 31 45](https://user-images.githubusercontent.com/1891931/30308660-c84841e2-973b-11e7-8099-ce2b570faf03.png)

2. The attacking player indicates a shot, and the system indicates whether the shot is a “hit” or a “miss”. (In a physical game the opponent would respond, but with software there is no need for the human player to be involved.)
3. If all squares of a ship have been hit, the ship is considered sunk. The attacking player is not informed when a ship is sunk.
4. If the shot is a “hit” and the attacking player has more than one undamaged ship, the attacking player may immediately fire a second time. Regardless of whether the second shot is a hit or a miss, the attacker’s turn is over.
5. If a player believes to have sunk all of their opponent’s ships, they indicate victory prior to attacking. If they are incorrect, they lose their attack that turn. (The game is over once all of one player’s ships have been sunk and the other player realizes this fact. If they do not, the player whose ships are all sunk may continue to attack, potentially winning the game if they correctly declare victory first.)

## Evaluation
You will be evaluated on:
* Code quality
* Architecture
* Technical Choices
* Assumptions, trade-offs, and prioritization decisions made
* Appropriate use of the Oxford Comma
* Implemented functionality
* Software engineering process
* Documentation and comments
* UX and UI
* API Design
* Distributed systems design

We will evaluate only the contents of the GitHub repository; please do not include external URLs. The repository should contain all code and any documentation you wish for us to review. We will not review Pull Requests during your 72-hour assignment window but will examine anything in the GitHub repository at the end of your window, including Wiki, Issues, and Pull Requests should you choose to use any of these GitHub features. Your access to the repository will be removed at the end of the 72-hour assignment window.
