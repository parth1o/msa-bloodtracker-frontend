import { makeStyles, createStyles, CircularProgress, Avatar, Typography } from '@material-ui/core';
import React from 'react';
import { CardList, GithubCard, SectionHeader } from './stories';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { BLOODTESTS } from './api/queries';
import { Bloodtests,Bloodtests_bloodtests_nodes } from './api/__generated__/Bloodtests';
import ReactDOM from 'react-dom';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryBar, VictoryLabel, VictoryAxis, VictoryContainer, VictoryScatter } from 'victory';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

const FeedPageStyles = makeStyles(
  createStyles({
    header: {
       
    },
    page: {
        
    },
    VictoryChart: {
        
    }
}));

export interface FeedPageProps {
  pageTitle: string;
}

const FeedPage = ({ pageTitle }: FeedPageProps): JSX.Element => {
  const [cards, setCards] = React.useState<JSX.Element[]>([]);
  
  const {loading, error, data} = useQuery<Bloodtests>(BLOODTESTS)
  const styles = FeedPageStyles();

  let arrHb: Array<number> = []
  let arrPlatelets: Array<number> = []
  let arrNeuts: Array<number> = []
  let arrWbc: Array<number> = []
  let arrMg: Array<number> = []
  let arrCreat: Array<number> = []
  let arrDate: Array<string> = []
  let arrTest: Array<string> = []

  let hb = []
  let plate = []
  let neuts = []
  let wbc = []
  let date = []
  let creat = []
  let mg = []


    //create new object
  var count = 0;
    if(!loading && !error) {
        const check = (data!.bloodtests!.nodes!.map((bloodtest : Bloodtests_bloodtests_nodes) => {
            if (count !== 10) {
                arrHb.push(bloodtest.hb)
                arrPlatelets.push(bloodtest.platelets)
                arrNeuts.push(bloodtest.neuts)
                arrWbc.push(bloodtest.wBC)
                arrMg.push(bloodtest.mg)
                arrCreat.push(bloodtest.creatinine)
                arrDate.push(bloodtest.date)
                arrTest.push(bloodtest.hb.toString())
                count++
            }
            
        }))
    }
    for(let i = 0; i < arrDate.length; i++) {
        hb.push({"x": arrDate[i], "y": arrHb[i]})
    }
    for(let i = 0; i < arrDate.length; i++) {
        plate.push({"x": arrDate[i], "y": arrPlatelets[i]})
    }
    for(let i = 0; i < arrDate.length; i++) {
        neuts.push({"x": arrDate[i], "y": arrNeuts[i]})
    }
    for(let i = 0; i < arrDate.length; i++) {
        creat.push({"x": arrDate[i], "y": arrCreat[i]})
    }
    for(let i = 0; i < arrDate.length; i++) {
        mg.push({"x": arrDate[i], "y": arrMg[i]})
    }
    for(let i = 0; i < arrDate.length; i++) {
        wbc.push({"x": arrDate[i], "y": arrWbc[i]})
    }


    return <div>
        <Container>
            <Row>
                <Col xs={12} lg={4} md={6}>
                   
                    <VictoryChart width={500} height={400}
                    theme={VictoryTheme.material}
                    >
                        <VictoryScatter data={hb}/>
                        <VictoryLine
                            style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc"},
                            }}
                            data={hb} 
                        />
                        
                    </VictoryChart>
                    <p style={{marginTop:'-2vh'}}>Haemaglobin</p>
                </Col>
                <Col xs={12} lg={4} md={6}>
                    
                    <VictoryChart width={500} height={400}
                    
                    theme={VictoryTheme.material}
                    >
                        
                        <VictoryLine
                            style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc"},
                            }}
                            data={plate} 
                        />
                        <VictoryScatter data={plate}/>
                    </VictoryChart>
                    <p style={{marginTop:'-2vh'}}>Platelets</p>
                </Col>
                <Col xs={12} lg={4} md={6}>
                    
                    <VictoryChart width={500} height={400}
                    theme={VictoryTheme.material}
                    >
                        <VictoryScatter data={wbc}/>
                        <VictoryLine
                            style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc"},
                            }}
                            data={wbc} 
                        />
                        
                    </VictoryChart>
                    <p style={{marginTop:'-2vh'}}>White Blood Cells</p>
                </Col>
            </Row>
            
            <Row>
            <Col xs={12} lg={4} md={6}>
                    
                    <VictoryChart width={500} height={400}
                    theme={VictoryTheme.material}
                    >
                        <VictoryScatter data={neuts}/>
                        <VictoryLine
                            style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc"},
                            }}
                            data={neuts} 
                        />
                        
                    </VictoryChart>
                    <p style={{marginTop:'-2vh'}}>Neutrophils</p>
                </Col>
                <Col xs={12} lg={4} md={6}>
                    <VictoryChart width={500} height={400}
                    theme={VictoryTheme.material}
                    >
                        <VictoryScatter data={mg}/>
                        <VictoryLine
                            style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc"},
                            }}
                            data={mg} 
                        />
                    </VictoryChart>
                    <p style={{marginTop:'-2vh'}}>Magnesium</p>
                </Col>
                <Col xs={12} lg={4} md={6}>
                    
                    <VictoryChart width={500} height={400}
                    theme={VictoryTheme.material}
                    >
                        <VictoryScatter data={creat}/>
                        <VictoryLine
                            style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc"},
                            }}
                            data={creat} 
                        />
                        
                    </VictoryChart>
                    <p style={{marginTop:'-2vh'}}>Creatinine</p>
                </Col>
            </Row>
        </Container>
        
    </div>
  
};

export default FeedPage;
