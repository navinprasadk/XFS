import React,{Component} from "react";
import { Grid, Divider, Icon } from "semantic-ui-react";
import jobDetails from '../../Config/jobDetails';
import buildDetails from '../../Config/buildDetails';

export default class BuildStatus extends Component {

    render() {
      return (
       <Grid>
        
        <Grid.Row style={{ backgroundColor:'#fff',height: '45vh', marginTop:'4%', 
    padding: '0'}}>
        
        <Grid.Column width={1} />
        <Grid.Column
                    width={4}
                    style={{
                        textAlign: "center",
                        
                    }}
                  >
                      
                      <p className='BuildStatus_text' style={{paddingTop:'5%'}}>Build started by </p>
                      <Grid.Row>
                          <Grid.Column>

                            {/* <i  class="fa fa-user-circle-o fa-5x BuildStatus_icon" aria-hidden="true"></i>  */}
                            <Icon className='BuildStatus_icon' size='massive' name='user circle' />
                          </Grid.Column>
                      </Grid.Row>

                      <Grid.Row>
                          <div className='BuildStatus_username'>{buildDetails.actions.userName}</div>
                      </Grid.Row>
                      
        
        </Grid.Column>
        <Grid.Column
                    width={10}
                    style={{marginTop:'5%'}}
                  >
                      <Grid>
                        <Grid.Row >
                          <Grid.Column width={8}>
                            <p className='BuildStatus_field_key'>BUILD STATUS</p>
                            <p className='BuildStatus_field_value red'>FAILURE</p>
                          </Grid.Column>
                          {/* <Grid.Column width={4}>
                              Failure
                           6/20/2019, 6:17:45 PM 
                          </Grid.Column> */}
                      
                          <Grid.Column width={8}>
                            <p className='BuildStatus_field_key'>BUILD DURATION</p>
                            <p className='BuildStatus_field_value'>{buildDetails.duration} milliseconds</p>
                          </Grid.Column>
                      
                          <Grid.Column width={8} >
                          <p className='BuildStatus_field_key'>BUILD NUMBER </p>
                          <p className='BuildStatus_field_value'>#{jobDetails.lastFailedBuild.number}</p>
                          </Grid.Column>

                          <Grid.Column width={8} >
                          <p className='BuildStatus_field_key'>BUILD URL </p>
                          <p className='BuildStatus_field_value'>{buildDetails.url}</p>
                          </Grid.Column>
                      </Grid.Row>
                      </Grid>
                      
        </Grid.Column>
        <Grid.Column width={1} />
        </Grid.Row>
        </Grid>
      )
    }
  }