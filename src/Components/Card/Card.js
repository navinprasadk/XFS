import React from "react";
import { Grid, Header, Icon, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import jobDetails from '../../Config/jobDetails';
import buildDetails from '../../Config/buildDetails';

import "./Card.css";

const Card = (props) => {

  return (
      <Grid style={{display:'flex', justifyContent:'space-around'}}>
            <Grid.Column
              className="Card_prop Flex_child Card_shadow"
              style={{
                margin: "0.8% 1.6%",
                marginTop:'4%',
                width: "20%",
              }}
            >
             
                <Grid.Row
                  style={{
                    margin: "0 2%",
                    padding: "2% 0%"
                  }}
                > 
                  <Grid.Column
                    width={16}
                    className="Card_data"
                  >
                    {" "}
                    {jobDetails.nextBuildNumber-1}
                  </Grid.Column>                
                  <Grid.Column
                    width={16}
                    className=" Card_header"
                  >
                    {" "}
                    Total Builds
                  </Grid.Column>{" "} 
                </Grid.Row>{" "}
            </Grid.Column>

            <Grid.Column
              className="Card_prop Flex_child Card_shadow"
              style={{
                margin: "0.8% 1.6%",
                marginTop:'4%',
                width: "20%",
              }}
            >
                <Grid.Row
                  style={{
                    margin: "0 2%",
                    padding: "2% 0%"
                  }}
                >
                   <Grid.Column
                    width={16}
                    className="Card_data"
                  >
                    {" "}
                    #{jobDetails.lastSuccessfulBuild.number}
                  </Grid.Column>   

                  <Grid.Column
                    width={16}
                    className="Card_header"
                  >
                    {" "}
                    Last Successful Build
                  </Grid.Column>{" "} 
                </Grid.Row>{" "}
            </Grid.Column>

            <Grid.Column
              className="Card_prop Flex_child Card_shadow"
              style={{
                margin: "0.8% 1.6%",
                marginTop:'4%',
                width: "20%",
              }}
            >
                <Grid.Row
                  style={{
                    margin: "0 2%",
                    padding: "2% 0%"
                  }}
                >
                  <Grid.Column
                    width={16}
                    className="Card_data"
                  >
                    {" "}
                    #{jobDetails.lastFailedBuild.number}
                  </Grid.Column>  
                  <Grid.Column
                    width={16}
                    className="Card_header"
                  >
                    {" "}
                    Last Failed Build
                  </Grid.Column>{" "} 
                </Grid.Row>{" "}
            </Grid.Column>  

             <Grid.Column
              className="Card_prop Flex_child Card_shadow"
              style={{
                margin: "0.8% 1.6%",
                marginTop:'4%',
                width: "20%",
              }}
            >
                <Grid.Row
                  style={{
                    margin: "0 2%",
                    padding: "2% 0%"
                  }}
                >
                  <Grid.Column
                    width={16}
                    className="Card_data "
                  >
                    {" "}
                    {jobDetails.healthReport.score}%
                  </Grid.Column>  
                  <Grid.Column
                    width={16}
                    className="Card_header"
                  >
                    {" "}
                    Build Score
                  </Grid.Column>{" "} 
                </Grid.Row>{" "}
            </Grid.Column>      
            
            </Grid>
  );
};

export default Card;
