export default function Presentation(props){
  console.log(props);
  return(
    <div>
      <h2>Salut {props.nom} {props.prenom} - Age :{props.age} </h2>
      {props.children}
      <hr/>
    </div>
  );
}