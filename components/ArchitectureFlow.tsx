"use client"

import ReactFlow from "reactflow"
import "reactflow/dist/style.css"

const nodes = [

{
id:"1",
position:{x:0,y:100},
data:{label:"Client App"},
type:"default"
},

{
id:"2",
position:{x:200,y:100},
data:{label:"API Gateway"},
},

{
id:"3",
position:{x:400,y:100},
data:{label:"Lambda"},
},

{
id:"4",
position:{x:600,y:100},
data:{label:"Amazon Bedrock"},
},

{
id:"5",
position:{x:800,y:100},
data:{label:"Vector Database"},
}

]

const edges = [

{ id:"e1",source:"1",target:"2" },
{ id:"e2",source:"2",target:"3" },
{ id:"e3",source:"3",target:"4" },
{ id:"e4",source:"4",target:"5" }

]

export default function ArchitectureFlow(){

return(

<div style={{height:300}}>

<ReactFlow
nodes={nodes}
edges={edges}
fitView
/>

</div>

)

}