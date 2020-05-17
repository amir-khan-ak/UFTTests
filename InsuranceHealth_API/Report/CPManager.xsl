<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/TR/xhtml1/strict">
  <xsl:include href="ReportStringTable.xsl"/>
  <xsl:template match="/">
    <font face="Calibri">
      <html>
        <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8"/>
        <link rel="stylesheet" media="screen">
          <xsl:attribute name="href">..\Results.css</xsl:attribute>
        </link>
        <body>
          <!--xsl:for-each select="/report/*"-->
          <p>
            <p>
              <B>
                <span class="hl1">
                  <xsl:value-of select="./VTD_Name"/>
                </span>
              </B>
            </p>
            <table align="center" border="0" cellpadding="3" cellspacing="1" width="97.5%%" bgcolor="#666699">
              <tr>
                <td bgcolor="white">
                  <table border="0" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                      <tr bgcolor="EEEEEE">
                        <td valign="middle" align="center" class="tablehl">
                          <span class="tablehl"><xsl:copy-of select="$IDS_CPManager_Name"/></span>
                        </td>
                        <td valign="middle" align="center" class="tablehl">
                          <span class="tablehl"><xsl:copy-of select="$IDS_CPManager_Result"/></span>
                        </td>
                        <td valign="middle" align="center" class="tablehl">
                          <span class="tablehl"><xsl:copy-of select="$IDS_CPManager_Property"/></span>
                        </td>
                        <td valign="middle" align="center" class="tablehl">
                          <span class="tablehl"><xsl:copy-of select="$IDS_CPManager_ActualResult"/></span>
                        </td>
                        <td valign="middle" align="center" class="tablehl">
                          <span class="tablehl"><xsl:copy-of select="$IDS_CPManager_EvaluationStyle"/></span>
                        </td>
                        <td valign="middle" align="center" class="tablehl">
                          <span class="tablehl"><xsl:copy-of select="$IDS_CPManager_ExpectedValues"/></span>
                        </td>
                        <td valign="middle" align="center" class="tablehl">
                          <span class="tablehl"><xsl:copy-of select="$IDS_CPManager_Details"/></span>
                        </td>
                      </tr>
                      <tr>
                        <td height="1" class="bg_darkblue"/>
                        <td height="1" class="bg_darkblue"/>
                        <td height="1" class="bg_darkblue"/>
                        <td height="1" class="bg_darkblue"/>
                        <td height="1" class="bg_darkblue"/>
                        <td height="1" class="bg_darkblue"/>
                      </tr>
                      <xsl:for-each select="/report/*">
                        <xsl:variable name="propName" select="./VTD_Xpath"/>
                        <tr bgcolor="white">
                          <td valign="middle" align="center" height="20">
                            <span class="text">
                              "<xsl:value-of select="./VTD_Name"/>"
                            </span>
                          </td>
                          <td valign="middle" align="center" height="20">
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
                          <td valign="middle" align="center" height="20">
                            <span class="text">
                              "<xsl:value-of select="./VTD_Xpath"/>"
                            </span>
                          </td>
                          <td valign="middle" align="center" height="20">
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
                          <td valign="middle" align="center" height="20">
                            <span class="text">
                              <xsl:value-of select="./VTD_Operation"/>
                            </span>
                          </td>
                          <td valign="middle" align="center" height="20">
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
                          <td valign="middle" align="center" height="20">
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
                                  </xsl:attribute><xsl:copy-of select="$IDS_ViewReport"/>
                                </a>
                              </xsl:if>
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
                        </tr>
                      </xsl:for-each>
                    </tbody>
                  </table>
                </td>
              </tr>
            </table>
          </p>
          <!--/xsl:for-each-->
        </body>
      </html>
    </font>
  </xsl:template>
</xsl:stylesheet>
