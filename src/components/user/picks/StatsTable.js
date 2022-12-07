import React from 'react'



export const StatsTable = () => {
  return (
    <div>
        <div className="text-right paginotor">
        <h6>Page Size:
            <span style={{borderRight: "2px solid black"}}><a href="#">50</a></span>
            <span style={{borderRight: "2px solid black"}}><a href="#">100</a></span>
            <span><a href="#">300</a></span>
        </h6>
        </div>
        <div className="mobileTable mx-3">
        <div className="row  mx-1">
            <div className="col-2  d-flex justify-content-center align-items-center"><span>#</span></div>
            <div className="col-8  text-center">PLAYER</div>
            <div className="col-2  d-flex justify-content-center align-items-center"><span>PTS</span></div>
        </div>
        <div className="row  mx-1 mobileTableRow">
            <div className="col-2  py-2 d-flex justify-content-center align-items-center"><span>1</span></div>
            <div className="col-8  py-2">
            <div>
                <span className="playerName">Bryce Harper</span>
                <span>RF</span>
                <span>PHI</span>
            </div>
            <div>
                <span>17 GMS</span>
                <span>22-63</span>
                <span>7-2B</span>
            </div>
            <div>
                <span>17 GMS</span>
                <span>22-63</span>
                <span>7-2B</span>
            </div>
            <div>
                <span>17 GMS</span>
                <span>22-63</span>
                <span>7-2B</span>
            </div>
            </div>
            <div className="col-2  py-2 d-flex justify-content-center align-items-center"><span>81</span></div>
        </div>
        <div className="row  mx-1 mobileTableRow">
            <div className="col-2  py-2 d-flex justify-content-center align-items-center"><span>1</span></div>
            <div className="col-8  py-2">
            <div>
                <span className="playerName">Bryce Harper</span>
                <span>RF</span>
                <span>PHI</span>
            </div>
            <div>
                <span>17 GMS</span>
                <span>22-63</span>
                <span>7-2B</span>
            </div>
            <div>
                <span>17 GMS</span>
                <span>22-63</span>
                <span>7-2B</span>
            </div>
            <div>
                <span>17 GMS</span>
                <span>22-63</span>
                <span>7-2B</span>
            </div>
            </div>
            <div className="col-2  py-2 d-flex justify-content-center align-items-center"><span>81</span></div>
        </div>
        <div className="row  mx-1 mobileTableRow">
            <div className="col-2  py-2 d-flex justify-content-center align-items-center"><span>1</span></div>
            <div className="col-8  py-2">
            <div>
                <span className="playerName">Bryce Harper</span>
                <span>RF</span>
                <span>PHI</span>
            </div>
            <div>
                <span>17 GMS</span>
                <span>22-63</span>
                <span>7-2B</span>
            </div>
            <div>
                <span>17 GMS</span>
                <span>22-63</span>
                <span>7-2B</span>
            </div>
            <div>
                <span>17 GMS</span>
                <span>22-63</span>
                <span>7-2B</span>
            </div>
            </div>
            <div className="col-2  py-2 d-flex justify-content-center align-items-center"><span>81</span></div>
        </div>
        <div className="row  mx-1 mobileTableRow">
            <div className="col-2  py-2 d-flex justify-content-center align-items-center"><span>1</span></div>
            <div className="col-8  py-2">
            <div>
                <span className="playerName">Bryce Harper</span>
                <span>RF</span>
                <span>PHI</span>
            </div>
            <div>
                <span>17 GMS</span>
                <span>22-63</span>
                <span>7-2B</span>
            </div>
            <div>
                <span>17 GMS</span>
                <span>22-63</span>
                <span>7-2B</span>
            </div>
            <div>
                <span>17 GMS</span>
                <span>22-63</span>
                <span>7-2B</span>
            </div>
            </div>
            <div className="col-2  py-2 d-flex justify-content-center align-items-center"><span>81</span></div>
        </div>
        </div>
        <div className="tableView">
        <div className="table-left">
            <ul>
            <li>RK</li>
            <li>NAME</li>
            </ul>
            <div className="table-bottom">
            <ul>
                <li>1</li>
                <li>Bryce Harper</li>
            </ul>
            <ul>
                <li>2</li>
                <li>Kyle Schwarber</li>
            </ul>
            <ul>
                <li>2</li>
                <li>Kyle Schwarber</li>
            </ul>
            <ul>
                <li>2</li>
                <li>Kyle Schwarber</li>
            </ul>
            <ul>
                <li>2</li>
                <li>Kyle Schwarber</li>
            </ul>
            <ul>
                <li>2</li>
                <li>Kyle Schwarber</li>
            </ul>
            <ul>
                <li>2</li>
                <li>Kyle Schwarber</li>
            </ul>
            </div>
            
        </div>
        <div className="table-right" id="r">
            <div id="t">
            <ul>
                <li>TEAM</li>
                <li>POS</li>
                <li>GMS</li>
                <li>AB</li>
                <li>R</li>
                <li>H</li>
                <li>2B</li>
                <li>3B</li>
                <li>HR</li>
                <li>RBI</li>
                <li>BB</li>
                <li>SO</li>
                <li>SB</li>
                <li>CS</li>
                <li>AVG</li>
                <li>OBP</li>
                <li>SLG</li>
                <li>OPS</li>
                <li>PTS</li>
            </ul>       
            <div>
                <ul>
                <li>PHI</li>
                <li>RF</li>
                <li>17</li>
                <li>63</li>
                <li>12</li>
                <li>22</li>
                <li>7</li>
                <li>0</li>
                <li>6</li>
                <li>13</li>
                <li>6</li>
                <li>14</li>
                <li>1</li>
                <li>0</li>
                <li>.349</li>
                <li>.414</li>
                <li>.746</li>
                <li>1.160</li>
                <li>81</li>
                </ul>
                <ul>
                <li>PHI</li>
                <li>RF</li>
                <li>17</li>
                <li>63</li>
                <li>12</li>
                <li>22</li>
                <li>7</li>
                <li>0</li>
                <li>6</li>
                <li>13</li>
                <li>6</li>
                <li>14</li>
                <li>1</li>
                <li>0</li>
                <li>.349</li>
                <li>.414</li>
                <li>.746</li>
                <li>1.160</li>
                <li>81</li>
                </ul>
                <ul>
                <li>PHI</li>
                <li>RF</li>
                <li>17</li>
                <li>63</li>
                <li>12</li>
                <li>22</li>
                <li>7</li>
                <li>0</li>
                <li>6</li>
                <li>13</li>
                <li>6</li>
                <li>14</li>
                <li>1</li>
                <li>0</li>
                <li>.349</li>
                <li>.414</li>
                <li>.746</li>
                <li>1.160</li>
                <li>81</li>
                </ul>
                <ul>
                <li>PHI</li>
                <li>RF</li>
                <li>17</li>
                <li>63</li>
                <li>12</li>
                <li>22</li>
                <li>7</li>
                <li>0</li>
                <li>6</li>
                <li>13</li>
                <li>6</li>
                <li>14</li>
                <li>1</li>
                <li>0</li>
                <li>.349</li>
                <li>.414</li>
                <li>.746</li>
                <li>1.160</li>
                <li>81</li>
                </ul>
                <ul>
                <li>PHI</li>
                <li>RF</li>
                <li>17</li>
                <li>63</li>
                <li>12</li>
                <li>22</li>
                <li>7</li>
                <li>0</li>
                <li>6</li>
                <li>13</li>
                <li>6</li>
                <li>14</li>
                <li>1</li>
                <li>0</li>
                <li>.349</li>
                <li>.414</li>
                <li>.746</li>
                <li>1.160</li>
                <li>81</li>
                </ul>
                <ul>
                <li>PHI</li>
                <li>RF</li>
                <li>17</li>
                <li>63</li>
                <li>12</li>
                <li>22</li>
                <li>7</li>
                <li>0</li>
                <li>6</li>
                <li>13</li>
                <li>6</li>
                <li>14</li>
                <li>1</li>
                <li>0</li>
                <li>.349</li>
                <li>.414</li>
                <li>.746</li>
                <li>1.160</li>
                <li>81</li>
                </ul>
                <ul>
                <li>PHI</li>
                <li>RF</li>
                <li>17</li>
                <li>63</li>
                <li>12</li>
                <li>22</li>
                <li>7</li>
                <li>0</li>
                <li>6</li>
                <li>13</li>
                <li>6</li>
                <li>14</li>
                <li>1</li>
                <li>0</li>
                <li>.349</li>
                <li>.414</li>
                <li>.746</li>
                <li>1.160</li>
                <li>81</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
        <div className="row mx-5 buttonsDiv">
        <div className="col-4"></div>
        <div className="col-4 d-flex p-0 px-xl-5 justify-content-end">
            <button className="mx-0 mx-lg-5 btn">Load More</button>
        </div>
        <div className="col-4 d-flex p-0 px-xl-5 justify-content-end">
            <button className="mx-0 mx-lg-5 btn">Back to top</button>
        </div>
        </div>
    </div>
  )
}
