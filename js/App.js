/**
 * @jsx React.DOM
 */

 		class MainContainer extends React.Component {
       constructor(props){
         super(props);
         this.btnStart = this.btnStart.bind(this);
         this.btnStop = this.btnStop.bind(this);
         this.state = {
           isStarted : false
         }
       }

       btnStart(){
           console.log('btnStarted', this.stopper);
           const started = true;
           this.setState({isStarted: started});
           console.log(this.state.isStarted);
       }

       btnStop(){
           console.log('btnStopped', this.stopper);
           const started = false;
           this.setState({isStarted: started});
           console.log(this.state.isStarted);
       }

       render() {
         return (
           <div className="MainContainer" >
             <NavContainer />
             <TimeContainer ref={e => {this.stopper = e}}/>
             <DistanceContainer />
             <PaceContainer />
             <CtaContainer isStarted={this.btnStart} isStopped={this.btnStop}/>
           </div>
 				);
       }
     }

     class CtaContainer extends React.Component{
       constructor(props){
         super(props);
       }

         render(){
           return (
             <section className="CtaContainer">
               <div className="play">
                 <button type="button" onClick={this.props.isStarted}>
                   <i className="fa fa-lg fa-play-circle" aria-hidden="true"></i>
                 </button>

               </div>
               <div className="stop">
                 <button type="button" onClick={this.props.isStopped}>
                   <i className="fa fa-lg fa-stop-circle" aria-hidden="true"></i>
                 </button>
               </div>
             </section>
           )
         }
       }


 	class TimeContainer extends React.Component {
       constructor(props){
       super(props);

         this.state = {
           s: '0' + 0,
           m: '0' + 0,
           h: '0' + 0
         };
       }

 componentDidMount(){

     setInterval( () => {
       let s = this.state.s;
       let m = this.state.m;
       let h = this.state.h;

 s++;
 s = (s >= 10) ? s : '0' + s;
 if (s >= 60){
   s = '0' + 0;
   m++;
   m = (m >= 10) ? m : '0' + m;
   if (m>=60){
     m = '0' + 0;
     h++;
     h = (h >= 10) ? h : '0' + h;
   }
 }

      this.setState({
        s: s, m: m, h: h
      });

   }.bind(this), 1000);
 }
       render() {
         return(
 				  <section className="TimeContainer" ref={ e => {this.stopper = e}}>
 					  <h2>{this.state.h}:{this.state.m}:{this.state.s}</h2>
 						<span>time</span>
 				  </section>
 				);
       }
     }

     ReactDOM.render(<MainContainer />, app);
