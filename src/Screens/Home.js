import React, { Component } from "react";
import { Grid, Icon, Button } from "semantic-ui-react";
import MenuBar from "../Components/MenuBar/MenuBar";
import JobHeader from "../Components/Text/JobHeader";
import Card from "../Components/Card/Card";
import BuildStatus from "../Components/Card/BuildStatus";

export default class Home extends Component {
render(){
    return(
        <React.Fragment>
            <MenuBar/>
           
            <Grid >
                <Grid.Row style={{
                    paddingTop:'0', 
                    height: "92vh",
                    overflow: "hidden",
                    backgroundColor: "#F4F6FA"
                    }}>
                    <Grid.Column width={2}/>
                    <Grid.Column
                         width={12}
                         style={{
                            
                            }}
                    >
                    <JobHeader />
                    <BuildStatus/>
                    <Card />
                    </Grid.Column>
                    <Grid.Column width={2}/>

                </Grid.Row>
            </Grid>
      
        </React.Fragment>
    )
}
}
