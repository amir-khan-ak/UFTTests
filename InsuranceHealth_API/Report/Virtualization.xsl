<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/TR/xhtml1/strict">

<!-- Remove this line for supporting MLU -->
<!--<xsl:include href="VirtualizationStringTable.xsl"/>-->
<!-- Add a new variable for supporting MLU -->
<xsl:variable name="StringTable">VirtualizationStringTable.xsl</xsl:variable> 

  <xsl:template match="/">
    <font face="Calibri">
      <html>
        <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8"/>
        <link rel="stylesheet" media="screen">
          <xsl:attribute name="href">..\Results.css</xsl:attribute>
        </link>
        <body>
          <table border="0" cellpadding="3" cellspacing="0" width="100%">
            <tr>
              <td height="1" class="bg_midblue"/>
            </tr>
            <tr>
              <td height="30">
                <p>
                  <span class="hl1name"><xsl:copy-of select="$IDS_VIRTUALIZATION"/></span>
                </p>
              </td>
            </tr>
            <tr>
              <td height="2" class="bg_darkblue"/>
            </tr>
          </table>
          <p>
            <table border="0" cellpadding="2" cellspacing="1" width="800" bgcolor="black">
              <COLGROUP>
                <COL width="25%"/>
                <COL width="75%"/>
              </COLGROUP>
              <tr bgcolor="EEEEEE">
                <th><xsl:copy-of select="$IDS_NAME"/></th>
                <th><xsl:copy-of select="$IDS_VALUE"/></th>
              </tr>
              <xsl:for-each select="/report/*">
				<xsl:if test="name() != 'EmulationsXML'">
                <tr>
                  <xsl:variable name="elementName" select="local-name()"/>
                  <xsl:if test="position()  mod 2 = 1">
                    <xsl:variable name="type" select="@link"/>
                    <xsl:if test="contains($type,'True')">
                      <td bgcolor="White" font-weight="bold" class="tablehl">
                        <a>
                          <xsl:attribute name="href">
                            <xsl:value-of select="@FileLocation"/>
                          </xsl:attribute>
                          <xsl:attribute name="target">
                            "_blank"
                          </xsl:attribute>
                          <xsl:value-of select="@name"/>
                        </a>
                      </td>
                    </xsl:if>
                    <xsl:if test="not(contains($type,'True'))">
                      <td bgcolor="White" font-weight="bold" class="tablehl">
                        <xsl:value-of select="@name"/>
                      </td>
                    </xsl:if>
                    <td bgcolor="White" class="text">
                      <xsl:variable name="val" select="."/>
                      <xsl:variable name="link" select="@link"/>
                      <xsl:if test="contains($link,'True')">
                        <a>
                          <xsl:attribute name="href">
                            <xsl:value-of select="@FileLocation"/>
                          </xsl:attribute>
                          <xsl:attribute name="target">
                            "_blank"
                          </xsl:attribute>
                          <xsl:value-of select='translate($val," ","&#160;")'/>
                        </a>
                      </xsl:if>
                      <xsl:if test="not(contains($link,'True'))">
                        <xsl:if test="$elementName = 'Comment'">
                          <pre class="text" style="font-size:100%;font-family:Calibri">
                            <xsl:value-of select='translate($val," ","&#160;")'/>
                          </pre>
                        </xsl:if>
                        <xsl:if test="not($elementName = 'Comment')">
                          <xsl:value-of select='translate($val," ","&#160;")'/>
                        </xsl:if>
                      </xsl:if>
                    </td>
                  </xsl:if>
                  <xsl:if test="position()  mod 2 = 0">
				  
                    <xsl:variable name="type" select="@link"/>
                    <xsl:if test="contains($type,'True')">
                      <td bgcolor="EEEEEE" font-weight="bold" class="tablehl">
                        <a>
                          <xsl:attribute name="href">
                            <xsl:value-of select="@FileLocation"/>
                          </xsl:attribute>
                          <xsl:attribute name="target">
                            "_blank"
                          </xsl:attribute>
                          <xsl:value-of select="@name"/>
                        </a>
                      </td>
                    </xsl:if>
                    <xsl:if test="not(contains($type,'True'))">
                      <td bgcolor="EEEEEE" font-weight="bold" class="tablehl">
                        <xsl:value-of select="@name"/>
                      </td>
                    </xsl:if>
                    <td bgcolor="EEEEEE" class="text">
                      <xsl:variable name="val" select="."/>
                      <xsl:variable name="link" select="@link"/>
                      <xsl:if test="contains($link,'True')">
                        <a>
                          <xsl:attribute name="href">
                            <xsl:value-of select="@FileLocation"/>
                          </xsl:attribute>
                          <xsl:attribute name="target">
                            "_blank"
                          </xsl:attribute>
                          <xsl:value-of select='translate($val," ","&#160;")'/>
                        </a>
                      </xsl:if>
                      <xsl:if test="not(contains($link,'True'))">
                        <xsl:if test="$elementName = 'Comment'">
                          <pre class="text" style="font-size:100%;font-family:Calibri">
                            <xsl:value-of select='translate($val," ","&#160;")'/>
                          </pre>
                        </xsl:if>
                        <xsl:if test="not($elementName = 'Comment')">
                          <xsl:value-of select='translate($val," ","&#160;")'/>
                        </xsl:if>
                      </xsl:if>
                    </td>
                  </xsl:if>
                </tr>
              </xsl:if>
			  </xsl:for-each>
            </table>
          </p>
        <p>
		<p>
        <span class="hl1name"><xsl:copy-of select="$IDS_VIRTUALIZED_SERVICES"/></span>
        </p>
		<table align="left" border="0" cellpadding="3" cellspacing="1" width="97.5%%" bgcolor="#666699">
              <tr>
                <td bgcolor="white">
                  <table border="0" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                      <tr bgcolor="EEEEEE">
                       
                        <td valign="middle" align="center" class="tablehl">
                          <span class="tablehl"><xsl:copy-of select="$IDS_PROJECT_NAME"/></span>
                        </td>
                        <td valign="middle" align="center" class="tablehl">
                          <span class="tablehl"><xsl:copy-of select="$IDS_SERVICE_NAME"/></span>
                        </td>
                        <td valign="middle" align="center" class="tablehl">
                          <span class="tablehl"><xsl:copy-of select="$IDS_MODE"/></span>
                        </td>						
                        <td valign="middle" align="center" class="tablehl">
                          <span class="tablehl"><xsl:copy-of select="$IDS_DATA_MODEL"/></span>
                        </td>
                        <td valign="middle" align="center" class="tablehl">
                          <span class="tablehl"><xsl:copy-of select="$IDS_PERFORMANCE_MODEL"/></span>
                        </td>
                        <td valign="middle" align="center" class="tablehl">
                          <span class="tablehl"><xsl:copy-of select="$IDS_SIMULATION_SERVER"/></span>
                        </td>
						<td valign="middle" align="center" class="tablehl">
                          <span class="tablehl"><xsl:copy-of select="$IDS_DATA_SIMULATION_ACCURACY"/></span>
                        </td>
						<td valign="middle" align="center" class="tablehl">
                          <span class="tablehl"><xsl:copy-of select="$IDS_PERFORMANCE_SIMULATION_ACCURACY"/></span>
                        </td>                        		
                        <td valign="middle" align="center" class="tablehl">
                          <span class="tablehl"><xsl:copy-of select="$IDS_DEPLOYED"/></span>
                        </td>
                      </tr>
                      <tr>
                        <td height="1" class="bg_darkblue"/>
                        <td height="1" class="bg_darkblue"/>
						<td height="1" class="bg_darkblue"/>
                        <td height="1" class="bg_darkblue"/>
                        <td height="1" class="bg_darkblue"/>
                        <td height="1" class="bg_darkblue"/>
                        <td height="1" class="bg_darkblue"/>
                      </tr>
                      <xsl:for-each select="/report/EmulationsXML/EmulationConfiguration/Emulations/Emulation/VirtualServices/*">
                        <tr bgcolor="white">
                          
						  <td valign="middle" align="center" height="20">
                            <span class="text">
                              "<xsl:value-of select="../../Name"/>"
                            </span>
                          </td>
                          <td valign="middle" align="center" height="20">
                            <span class="text">
                              "<xsl:value-of select="./Name"/>"
                            </span>
                          </td>
                          <td valign="middle" align="center" height="20">
                            <span class="text">
                              "<xsl:value-of select="./RuntimeMode"/>"
                            </span>
                          </td>						  
						  <td valign="middle" align="center" height="20">
                            <span class="text">
                              "<xsl:value-of select="./RuntimeDataModel/Name"/>"
                            </span>
                          </td>
						  <td valign="middle" align="center" height="20">
                            <span class="text">
                              "<xsl:value-of select="./RuntimePerformanceModel/Name"/>"
                            </span>
                          </td>
                          <td valign="middle" align="center" height="20">
                            <span class="text">
                              "<xsl:value-of select="../../EmulationServer/UriAddress"/>"
                            </span>
                          </td>
						  <td valign="middle" align="center" height="20">
                            <span class="text">
							  <xsl:variable name="DataSimulationAccurancy" select="./RuntimeReport/SimulationAccuracy"/>
							  <xsl:choose>
							    <xsl:when test="not($DataSimulationAccurancy)">
									<xsl:value-of select="'N/A'"/>
							    </xsl:when>
							    <xsl:when test="./RuntimeDataModel/Id='89F50B43-54BE-447A-95C0-F186805B9D79'">
									<xsl:value-of select="'N/A'"/>
							    </xsl:when>
							    <xsl:otherwise>
									<xsl:value-of select="concat($DataSimulationAccurancy, '%')"/>							  
							    </xsl:otherwise>
							  </xsl:choose>
                            </span>
                          </td>
						  <td valign="middle" align="center" height="20">
                            <span class="text">
							  <xsl:variable name="PerformanceSimulationAccurancy" select="./RuntimeReport/PerformanceModelAccuracy"/> 
							  <xsl:choose>							  
							    <xsl:when test="not($PerformanceSimulationAccurancy)">
									<xsl:value-of select="'N/A'"/>
							    </xsl:when>
							    <xsl:when test="./PerformanceModel/Id='B3F7DB02-73E2-47BE-9A50-58E9BCD55939'">
									<xsl:value-of select="'N/A'"/>
							    </xsl:when>							  
							    <xsl:otherwise>
									<xsl:value-of select="concat($PerformanceSimulationAccurancy, '%')"/>							  
							    </xsl:otherwise>
							  </xsl:choose>
                            </span>
                          </td>
						  <td valign="middle" align="center" height="20">
                            <span class="text">
                              <xsl:choose>
                                <xsl:when test="./IsServiceDeployed/child::text()='Yes'">
								                  <IMG alt="Yes" src="..\ok26.jpg"/>
                                </xsl:when>
                                <xsl:when test="./IsServiceDeployed/child::text()='No'">
                                  <IMG alt="No" src="..\fail26.jpg"/>
                                </xsl:when>
                                <xsl:otherwise>
                                  <IMG alt="N/A" src="..\n_a.jpg"/>
                                </xsl:otherwise>
                              </xsl:choose>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td height="1" class="bg_gray_eee"/>
                          <td height="1" class="bg_gray_eee"/>
                          <td height="1" class="bg_gray_eee"/>
                          <td height="1" class="bg_gray_eee"/>
                          <td height="1" class="bg_gray_eee"/>
                          <td height="1" class="bg_gray_eee"/>
						  <td height="1" class="bg_gray_eee"/>
                        </tr>
                      </xsl:for-each>
                    </tbody>
                  </table>
                </td>
              </tr>
            </table>
		</p>
		</body>
      </html>
    </font>
  </xsl:template>
</xsl:stylesheet>