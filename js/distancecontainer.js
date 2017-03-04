class DistanceContainer extends React.Component {
     constructor(props){
     super(props);

       this.state = {
         k: 0,
         m: "0" + 0
       };
   }

     render() {
       return (
       <section className="DistanceContainer">
         <h2>{this.state.k}.{this.state.m}</h2>
         <span>kilometers</span>
       </section>
      );
     }
   }
