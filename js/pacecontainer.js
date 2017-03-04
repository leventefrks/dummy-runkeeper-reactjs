/**
 * @jsx React.DOM
 */

class PaceContainer extends React.Component {
   constructor(props){
   super(props);

     this.state = {
       m:  0,
       s: "0" + 0
     };
 }

   render() {
     return (
     <section className="PaceContainer">
       <div className="currentPace">
          <h2>{this.state.m}.{this.state.s}</h2>
          <span>current pace</span>
        </div>
        <div className="avgPace">
          <h2>{this.state.m}.{this.state.s}</h2>
          <span>avg pace</span>
        </div>
     </section>
    );
   }
 }
