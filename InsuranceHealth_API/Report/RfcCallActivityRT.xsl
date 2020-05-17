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
          <table border="0" cellpadding="3" cellspacing="0" width="100%">
            <tr>
              <td height="1" class="bg_midblue"/>
            </tr>
            <tr>
              <td height="30">
                <p>
                  <b>
                  <span class="hl1name">
                    <xsl:copy-of select="$IDS_StepProperties"/>
                  </span>
                  </b>
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
                <th>
                  <xsl:copy-of select="$IDS_Name"/>
                </th>
                <th>
                  <xsl:copy-of select="$IDS_Value"/>
                </th>
              </tr>
              <xsl:for-each select="/report/*">
                <xsl:if test="not(contains(@name,'Imports')) and 
                              not(contains(@name,'Changing')) and
                              not(contains(@name,'Reuslt Changing')) and
                              not(contains(@name,'Tables')) and
                              not(contains(@name,'Exports')) and
                              not(contains(@name,'OutTables'))
                ">
                
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
            <b>
              <span class="hl1name">
                <xsl:copy-of select="$IDS_RfcCallActivityRT_RfcProperties"/>
              </span>
            </b>
          </p>
          
          <p>
            <table border="0" cellpadding="2" cellspacing="1" width="800" bgcolor="black">
              <COLGROUP>
                <COL width="25%"/>
                <COL width="75%"/>
              </COLGROUP>
              <tr bgcolor="EEEEEE">
                <th>
                  <xsl:copy-of select="$IDS_Name"/>
                </th>
                <th>
                  <xsl:copy-of select="$IDS_Value"/>
                </th>
              </tr>
              <xsl:for-each select="/report/*">
                <xsl:if test="contains(@name,'Imports') or 
                              contains(@name,'Changing') or
                              contains(@name,'OutChanging') or
                              contains(@name,'Tables') or
                              contains(@name,'Exports') or
                              contains(@name,'OutTables')
                ">

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
        </body>
      </html>
    </font>
  </xsl:template>
</xsl:stylesheet>