<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/TR/xhtml1/strict">
  <xsl:include href="ReportStringTable.xsl"/>
  <xsl:template match="/">
    <font face="Calibri">
      <html>
        
          <head>
            <script type="text/javascript" src="..//jquery-1.6.2.js">/*DO NOT remove this comment, it is used to keep script tag end block when converting Xml to Html.*/</script>
            <script type="text/javascript" src="..//jqtreetable.js">/*DO NOT remove this comment, it is used to keep script tag end block when converting Xml to Html.*/</script>
            <script type="text/javascript">
              var map1 = <xsl:value-of select="./Report/Map"/>;
              var parents = <xsl:value-of select="./Report/ParentsMap"/>;
          </script>
              <script type="text/javascript">
                $(function () {//Initialise the treetable
                var options1 = { openImg: "..//tv-collapsable-last.gif", shutImg: "..//tv-expandable-last.gif", leafImg: "..//tv-item-last.gif", lastOpenImg: "..//tv-collapsable-last.gif", lastShutImg: "..//tv-expandable-last.gif", lastLeafImg: "..//tv-item-last.gif", vertLineImg: "..//blank.gif", blankImg: "..//blank.gif", collapse: parents, column: 0, striped: false, highlight: false, state: false };
                $("#treet1").jqTreeTable(map1, options1);
                });
              </script>
            <link type="text/css" rel="Stylesheet" href="..//jqtreetable.css" />
          </head>
        
        <body>
          <!--xsl:for-each select="/report/*"-->
          <p>
            
            <div style="border-width: 1px; border-style: solid; border-color: black; ">
              <table class="tablemain" cellpadding="3" cellspacing="0" width="100%">
                    <thead>
                      <tr bgcolor="EEEEEE">
                        <th>
                          <span style="font-weight: normal;">
                            <xsl:copy-of select="$IDS_Name"/>
                          </span>
                        </th>
                        <th>
                          <span style="font-weight: normal;">
                            <xsl:copy-of select="$IDS_CPManager_Result"/>
                          </span>
                        </th>
                        <th>
                          <span style="font-weight: normal;">
                            <xsl:copy-of select="$IDS_CPManager_Property"/>
                          </span>
                        </th>
                        <th>
                          <span style="font-weight: normal;">
                            <xsl:copy-of select="$IDS_CPManager_ActualResult" />
                          </span>
                        </th>
                        <th>
                          <span style="font-weight: normal;">
                            <xsl:copy-of select="$IDS_CPManager_EvaluationStyle"/>
                          </span>
                        </th>
                        <th>
                          <span style="font-weight: normal;">
                            <xsl:copy-of select="$IDS_CPManager_ExpectedValues"/>
                          </span>
                        </th>
                        <th>
                          <span style="font-weight: normal;">
                            <xsl:copy-of select="$IDS_CPManager_Details"/>
                          </span>
                        </th>
                      </tr>
                    </thead>
                   <tbody id="treet1">
                          
                      <xsl:for-each select="/Report/Checkpoint">
                        <xsl:variable name="propName" select="./VTD_Xpath"/>
                        <tr bgcolor="white">
                          <td  height="20">
                            <span class="text">
                              "<xsl:value-of select="./VTD_Name"/>"
                            </span>
                          </td>
                          <td  height="20">
                            <span class="text">
                              <xsl:choose>
                                <xsl:when test="./VTD_Status/@code='Success'">

                                  <IMG alt="{$IDS_SuccessTooltip}" src="..\ok26.jpg"/>
                                </xsl:when>
                                <xsl:otherwise>
                                  <IMG alt="{$IDS_FailureTooltip}" src="..\fail26.jpg"/>
                                </xsl:otherwise>
                              </xsl:choose>
                            </span>
                          </td>
                          <td  height="20">
                            <span class="text">
                              "<xsl:value-of select="./VTD_Xpath"/>"
                            </span>
                          </td>
                          <td  height="20">
                            <xsl:variable name="valActual" select="./VTD_Actual"/>
                            <xsl:variable name="type" select="./VTD_Actual/@link"/>
                            <span class="text">

                              <xsl:if test="contains($type,'True')">
                                <a>
                                  <xsl:attribute name="href">
                                    <xsl:value-of select="./VTD_Actual/@FileLocation"/>
                                  </xsl:attribute>
                                  <xsl:attribute name="target">
                                    "_blank"
                                  </xsl:attribute>
                                  <xsl:value-of select='$valActual'/>
                                </a>
                              </xsl:if>
                              <xsl:if test="not(contains($type,'True'))">
                                "<xsl:value-of select='translate($valActual," ","&#160;")'/>"
                              </xsl:if>

                            </span>
                          </td>
                          <td  height="20">
                            <span class="text">
                              <xsl:value-of select="./VTD_Operation"/>
                            </span>
                          </td>
                          <td  height="20">
                            <xsl:variable name="valExpected" select="./VTD_Expected"/>
                            <xsl:variable name="isLink" select="./VTD_Expected/@link"/>
                            <span class="text">

                              <xsl:if test="contains($isLink,'True')">
                                <a>
                                  <xsl:attribute name="href">
                                    <xsl:value-of select="./VTD_Expected/@FileLocation"/>
                                  </xsl:attribute>
                                  <xsl:attribute name="target">
                                    "_blank"
                                  </xsl:attribute>
                                  <xsl:value-of select='$valExpected'/>
                                </a>
                              </xsl:if>
                              <xsl:if test="not(contains($isLink,'True'))">
                                "<xsl:value-of select='translate($valExpected," ","&#160;")'/>"
                              </xsl:if>

                            </span>
                          </td>
                          <td  height="20">
                            <span class="text">
                              <xsl:if test="count(./VTD_Details) != 0">
                                <xsl:variable name="valDetails" select="./VTD_Details"/>
                                <xsl:variable name="typeDetails" select="./VTD_Details/@link"/>
                                <span class="text">

                                  <xsl:if test="contains($typeDetails,'True')">
                                    <a>
                                      <xsl:attribute name="href">
                                        <xsl:value-of select="./VTD_Details/@FileLocation"/>
                                      </xsl:attribute>
                                      <xsl:attribute name="target">
                                        "_blank"
                                      </xsl:attribute>
                                      <xsl:value-of select='$valDetails'/>
                                    </a>
                                  </xsl:if>
                                  <xsl:if test="not(contains($typeDetails,'True'))">
                                    "<xsl:value-of select='translate($valDetails," ","&#160;")'/>"
                                  </xsl:if>
                                </span>
                              </xsl:if>
                              <xsl:if test="count(./ReferencedDetails) != 0">
                                <a>
                                  <xsl:attribute name="href">
                                    <xsl:value-of select="./ReferencedDetails"/>
                                  </xsl:attribute>
                                  <xsl:attribute name="target">
                                    "_blank"
                                  </xsl:attribute>$IDS_ViewReport
                                </a>
                              </xsl:if>
                            </span>
                          </td>
                        </tr>
                        
                      </xsl:for-each>
                    </tbody>
                  </table>
            </div>
          </p>
          <!--/xsl:for-each-->
        </body>
      </html>
    </font>
  </xsl:template>
</xsl:stylesheet>
