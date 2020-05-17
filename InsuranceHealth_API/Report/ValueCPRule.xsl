<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xsl:include href="ReportStringTable.xsl"/>
	<xsl:template match="/">
		<html>
			<head>
				<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8"/>
				<link rel="stylesheet" media="screen">
					<xsl:attribute name="href">..\Results.css</xsl:attribute>
				</link>
			</head>
			<body>
				<xsl:for-each select="report">
					<p>
						<p>
							<B>
								<span class="hl1">Checkpoint Details:</span>
							</B>
						</p>
						<table align="center" border="0" cellpadding="3" cellspacing="1" width="97.5%%" bgcolor="#666699">
							<tr>
								<td bgcolor="white">
									<table border="0" cellpadding="3" cellspacing="0" width="100%">
										<tbody>
											<tr>
												<td valign="middle" align="left" class="tablehl">
													<span class="tablehl">
                            <xsl:copy-of select="$IDS_ValueCPRule_Result"/>
                          </span>
												</td>
												<td valign="middle" align="left" class="tablehl">
													<span class="tablehl">
                            <xsl:copy-of select="$IDS_ValueCPRule_XPath"/>
                          </span>
												</td>
												<td valign="middle" align="left" class="tablehl">
													<span class="tablehl">
                            <xsl:copy-of select="$IDS_ValueCPRule_EvaluationStyle"/>
                          </span>
												</td>
												<td valign="middle" align="left" class="tablehl">
													<span class="tablehl">
                            <xsl:copy-of select="$IDS_ValueCPRule_ExpectedValues"/>
                          </span>
												</td>
												<td valign="middle" align="left" class="tablehl">
													<span class="tablehl">
                            <xsl:copy-of select="$IDS_ValueCPRule_ActualResult"/>
                          </span>
												</td>
											</tr>
											<tr>
												<td height="1" class="bg_darkblue"/>
												<td height="1" class="bg_darkblue"/>
												<td height="1" class="bg_darkblue"/>
												<td height="1" class="bg_darkblue"/>
												<td height="1" class="bg_darkblue"/>
											</tr>
												<tr>
													<td valign="middle" align="left" height="20">
														<span class="text">
															<xsl:choose>
																<xsl:when test="/report/VTD_Status/@code='Success'">
																	
																	<IMG alt="{$IDS_SuccessTooltip}" src="..\ok26.jpg"/>
																</xsl:when>
																<xsl:otherwise>
																	<IMG alt="{$IDS_FailureTooltip}" src="..\fail26.jpg"/>
																</xsl:otherwise>
															</xsl:choose>
														</span>
													</td>
													<td valign="middle" align="left" height="20">
														<span class="text">
																<xsl:value-of select="/report/VTD_Xpath"/>
														</span>
													</td>
													<td valign="middle" align="left" height="20">
														<span class="text">
																<xsl:value-of select="/report/VTD_Operation"/>
														</span>
													</td>
													<td valign="middle" align="left" height="20">
														<span class="text">"<xsl:value-of select="/report/VTD_Expected"/>"</span>
													</td>
													<td valign="middle" align="left" height="20">
														<span class="text">"<xsl:value-of select="/report/VTD_Actual"/>"</span>
													</td>
												</tr>
												<tr>
													<td height="1" class="bg_gray_eee"/>
													<td height="1" class="bg_gray_eee"/>
													<td height="1" class="bg_gray_eee"/>
													<td height="1" class="bg_gray_eee"/>
													<td height="1" class="bg_gray_eee"/>
												</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</table>
					</p>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
