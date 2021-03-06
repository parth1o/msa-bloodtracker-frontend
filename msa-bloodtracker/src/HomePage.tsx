import { makeStyles, createStyles} from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { BLOODTESTS } from './api/queries';
import { Bloodtests,Bloodtests_bloodtests_nodes } from './api/__generated__/Bloodtests';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryScatter } from 'victory';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

const HomePageStyles = makeStyles(
  createStyles({
    spacing:{
        marginTop:'3vh'
    },
    graphheading: {
        marginTop:'-2vh',
        textAlign:'center',
        color:'#cc3434',
    },
    heading:{
        marginTop:'2vh',
        textAlign:'center',
        color:'#cc3434',
    },
}));



const HomePage = (): JSX.Element => {  
  const {loading, error, data} = useQuery<Bloodtests>(BLOODTESTS)
  const styles = HomePageStyles();

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

    
    if(!loading && !error) {
        const check = (data!.bloodtests!.nodes!.map((bloodtest : Bloodtests_bloodtests_nodes) => {
                arrHb.push(bloodtest.hb)
                arrPlatelets.push(bloodtest.platelets)
                arrNeuts.push(bloodtest.neuts)
                arrWbc.push(bloodtest.wBC)
                arrMg.push(bloodtest.mg)
                arrCreat.push(bloodtest.creatinine)
                arrDate.push(bloodtest.date)
                arrTest.push(bloodtest.hb.toString())
            
        }))
    }
    for(let i = arrDate.length-5>=0?arrDate.length-5:0; i < arrDate.length; i++) {
        hb.push({"x": arrDate[i], "y": arrHb[i]})
        plate.push({"x": arrDate[i], "y": arrPlatelets[i]})
        neuts.push({"x": arrDate[i], "y": arrNeuts[i]})
        creat.push({"x": arrDate[i], "y": arrCreat[i]})
        mg.push({"x": arrDate[i], "y": arrMg[i]})
        wbc.push({"x": arrDate[i], "y": arrWbc[i]})
    }

    return <div>
        <Container>
            <Row>
                <h1 className={styles.heading}>Five most recent bloodtest results:</h1>
            </Row>
            <Row className={styles.spacing}>
                <Col xs={12} lg={4} md={6}>   
                    <VictoryChart width={500} height={400}
                    theme={VictoryTheme.material}
                    >
                        <VictoryScatter data={hb}/>
                        <VictoryLine
                            style={{
                            data: { stroke: "#cc3434" },
                            parent: { border: "1px solid #ccc"},
                            }}
                            data={hb} 
                        />  
                    </VictoryChart>
                    <p className={styles.graphheading}>Haemaglobin</p>
                </Col>
                <Col xs={12} lg={4} md={6}>
                    <VictoryChart width={500} height={400}
                    theme={VictoryTheme.material}
                    >
                        <VictoryLine
                            style={{
                            data: { stroke: "#cc3434" },
                            parent: { border: "1px solid #ccc"},
                            }}
                            data={plate} 
                        />
                        <VictoryScatter data={plate}/>
                    </VictoryChart>
                    <p className={styles.graphheading}>Platelets</p>
                </Col>
                <Col xs={12} lg={4} md={6}>
                    <VictoryChart width={500} height={400}
                    theme={VictoryTheme.material}
                    >
                        <VictoryScatter data={wbc}/>
                        <VictoryLine
                            style={{
                            data: { stroke: "#cc3434" },
                            parent: { border: "1px solid #ccc"},
                            }}
                            data={wbc} 
                        />
                    </VictoryChart>
                    <p className={styles.graphheading}>White Blood Cells</p>
                </Col>
                <Col xs={12} lg={4} md={6}>
                    <VictoryChart width={500} height={400}
                    theme={VictoryTheme.material}
                    >
                        <VictoryScatter data={neuts}/>
                        <VictoryLine
                            style={{
                            data: { stroke: "#cc3434" },
                            parent: { border: "1px solid #ccc"},
                            }}
                            data={neuts} 
                        />
                    </VictoryChart>
                    <p className={styles.graphheading}>Neutrophils</p>
                </Col>
                <Col xs={12} lg={4} md={6}>
                    <VictoryChart width={500} height={400}
                    theme={VictoryTheme.material}
                    >
                        <VictoryScatter data={mg}/>
                        <VictoryLine
                            style={{
                            data: { stroke: "#cc3434" },
                            parent: { border: "1px solid #ccc"},
                            }}
                            data={mg} 
                        />
                    </VictoryChart>
                    <p className={styles.graphheading}>Magnesium</p>
                </Col>
                <Col xs={12} lg={4} md={6}>
                    <VictoryChart width={500} height={400}
                    theme={VictoryTheme.material}
                    >
                        <VictoryScatter data={creat}/>
                        <VictoryLine
                            style={{
                            data: { stroke: "#cc3434" },
                            parent: { border: "1px solid #ccc"},
                            }}
                            data={creat} 
                        />
                    </VictoryChart>
                    <p className={styles.graphheading}>Creatinine</p>
                </Col>
            </Row>
        </Container>
        
    </div>
  
};

export default HomePage;
