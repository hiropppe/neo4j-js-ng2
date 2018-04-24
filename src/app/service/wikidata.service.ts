import { Injectable }     from '@angular/core';

@Injectable()
export class WikidataService
{

    properties: any = {
        "P10": {
            "title": "video",
            "type": "Commons media file"
        },
        "P1000": {
            "title": "record held",
            "type": "Item"
        },
        "P1001": {
            "title": "applies to jurisdiction",
            "type": "Item"
        },
        "P1002": {
            "title": "engine configuration",
            "type": "Item"
        },
        "P1003": {
            "title": "NLR (Romania) ID",
            "type": "External identifier"
        },
        "P1004": {
            "title": "MusicBrainz place ID",
            "type": "External identifier"
        },
        "P1005": {
            "title": "PTBNP ID",
            "type": "External identifier"
        },
        "P1006": {
            "title": "National Thesaurus for Author Names ID",
            "type": "External identifier"
        },
        "P1007": {
            "title": "Lattes Platform number",
            "type": "External identifier"
        },
        "P101": {
            "title": "field of work",
            "type": "Item"
        },
        "P1011": {
            "title": "excluding",
            "type": "Item"
        },
        "P1012": {
            "title": "including",
            "type": "Item"
        },
        "P1013": {
            "title": "criterion used",
            "type": "Item"
        },
        "P1014": {
            "title": "AAT ID",
            "type": "External identifier"
        },
        "P1015": {
            "title": "BIBSYS ID",
            "type": "External identifier"
        },
        "P1016": {
            "title": "asteroid taxonomy",
            "type": "Item"
        },
        "P1017": {
            "title": "BAV ID",
            "type": "External identifier"
        },
        "P1018": {
            "title": "language regulatory body",
            "type": "Item"
        },
        "P1019": {
            "title": "feed URL",
            "type": "URL"
        },
        "P102": {
            "title": "member of political party",
            "type": "Item"
        },
        "P1021": {
            "title": "KldB-2010 occupation code",
            "type": "External identifier"
        },
        "P1022": {
            "title": "CNO-11 occupation code",
            "type": "External identifier"
        },
        "P1023": {
            "title": "SBC-2010 occupation code",
            "type": "External identifier"
        },
        "P1024": {
            "title": "SBFI occupation code",
            "type": "External identifier"
        },
        "P1025": {
            "title": "SUDOC editions",
            "type": "External identifier"
        },
        "P1026": {
            "title": "doctoral thesis",
            "type": "Item"
        },
        "P1027": {
            "title": "conferred by",
            "type": "Item"
        },
        "P1028": {
            "title": "donated by",
            "type": "Item"
        },
        "P1029": {
            "title": "crew member",
            "type": "Item"
        },
        "P103": {
            "title": "native language",
            "type": "Item"
        },
        "P1030": {
            "title": "light characteristic of lighthouse",
            "type": "String"
        },
        "P1031": {
            "title": "legal citation of this text",
            "type": "String"
        },
        "P1032": {
            "title": "Digital Rights Management system",
            "type": "Item"
        },
        "P1033": {
            "title": "GHS signal word",
            "type": "Item"
        },
        "P1034": {
            "title": "main food source",
            "type": "Item"
        },
        "P1035": {
            "title": "honorific suffix",
            "type": "Item"
        },
        "P1036": {
            "title": "Dewey Decimal Classification",
            "type": "String"
        },
        "P1037": {
            "title": "manager/director",
            "type": "Item"
        },
        "P1038": {
            "title": "relative",
            "type": "Item"
        },
        "P1039": {
            "title": "type of kinship",
            "type": "Item"
        },
        "P1040": {
            "title": "film editor",
            "type": "Item"
        },
        "P1041": {
            "title": "socket supported",
            "type": "Item"
        },
        "P1042": {
            "title": "ZDB ID",
            "type": "External identifier"
        },
        "P1043": {
            "title": "IDEO Job ID",
            "type": "External identifier"
        },
        "P1044": {
            "title": "SWB editions",
            "type": "External identifier"
        },
        "P1045": {
            "title": "Sycomore ID",
            "type": "External identifier"
        },
        "P1046": {
            "title": "discovery method",
            "type": "Item"
        },
        "P1047": {
            "title": "Catholic Hierarchy person ID",
            "type": "External identifier"
        },
        "P1048": {
            "title": "NCL ID",
            "type": "External identifier"
        },
        "P1049": {
            "title": "worshipped by",
            "type": "Item"
        },
        "P105": {
            "title": "taxon rank",
            "type": "Item"
        },
        "P1050": {
            "title": "medical condition",
            "type": "Item"
        },
        "P1051": {
            "title": "PSH ID",
            "type": "External identifier"
        },
        "P1052": {
            "title": "Portuguese Job Code CPP-2010",
            "type": "External identifier"
        },
        "P1053": {
            "title": "ResearcherID",
            "type": "External identifier"
        },
        "P1054": {
            "title": "NDL bib ID",
            "type": "External identifier"
        },
        "P1055": {
            "title": "NLM Unique ID",
            "type": "External identifier"
        },
        "P1056": {
            "title": "product or material produced",
            "type": "Item"
        },
        "P1057": {
            "title": "chromosome",
            "type": "Item"
        },
        "P1058": {
            "title": "ERA Journal ID",
            "type": "External identifier"
        },
        "P1059": {
            "title": "CVR number",
            "type": "External identifier"
        },
        "P106": {
            "title": "occupation",
            "type": "Item"
        },
        "P1060": {
            "title": "pathogen transmission process",
            "type": "Item"
        },
        "P1064": {
            "title": "track gauge",
            "type": "Item"
        },
        "P1065": {
            "title": "archive URL",
            "type": "URL"
        },
        "P1066": {
            "title": "student of",
            "type": "Item"
        },
        "P1067": {
            "title": "Thailand central administrative unit code",
            "type": "External identifier"
        },
        "P1068": {
            "title": "instruction set",
            "type": "Item"
        },
        "P1069": {
            "title": "Statistics Denmarks classification of occupation (DISCO-08)",
            "type": "External identifier"
        },
        "P1070": {
            "title": "PlantList-ID",
            "type": "External identifier"
        },
        "P1071": {
            "title": "location of final assembly",
            "type": "Item"
        },
        "P1072": {
            "title": "readable file format",
            "type": "Item"
        },
        "P1073": {
            "title": "writable file format",
            "type": "Item"
        },
        "P1074": {
            "title": "fictional analog of",
            "type": "Item"
        },
        "P1075": {
            "title": "rector",
            "type": "Item"
        },
        "P1076": {
            "title": "ICTV virus ID",
            "type": "External identifier"
        },
        "P1077": {
            "title": "KOATUU identifier",
            "type": "String"
        },
        "P1078": {
            "title": "valvetrain configuration",
            "type": "Item"
        },
        "P1079": {
            "title": "launch contractor",
            "type": "Item"
        },
        "P108": {
            "title": "employer",
            "type": "Item"
        },
        "P1080": {
            "title": "from fictional universe",
            "type": "Item"
        },
        "P1081": {
            "title": "Human Development Index",
            "type": "Quantity"
        },
        "P1082": {
            "title": "population",
            "type": "Quantity"
        },
        "P1083": {
            "title": "maximum capacity",
            "type": "Quantity"
        },
        "P1084": {
            "title": "EUL editions",
            "type": "External identifier"
        },
        "P1085": {
            "title": "LibraryThing work ID",
            "type": "External identifier"
        },
        "P1086": {
            "title": "atomic number",
            "type": "Quantity"
        },
        "P1087": {
            "title": "Elo rating",
            "type": "Quantity"
        },
        "P1088": {
            "title": "Mohs' hardness",
            "type": "Quantity"
        },
        "P109": {
            "title": "signature",
            "type": "Commons media file"
        },
        "P1090": {
            "title": "redshift",
            "type": "Quantity"
        },
        "P1092": {
            "title": "total produced",
            "type": "Quantity"
        },
        "P1093": {
            "title": "gross tonnage",
            "type": "Quantity"
        },
        "P1096": {
            "title": "orbital eccentricity",
            "type": "Quantity"
        },
        "P1097": {
            "title": "g-factor",
            "type": "Quantity"
        },
        "P1098": {
            "title": "number of speakers",
            "type": "Quantity"
        },
        "P1099": {
            "title": "number of masts",
            "type": "Quantity"
        },
        "P110": {
            "title": "illustrator",
            "type": "Item"
        },
        "P1100": {
            "title": "number of cylinders",
            "type": "Quantity"
        },
        "P1101": {
            "title": "floors above ground",
            "type": "Quantity"
        },
        "P1102": {
            "title": "flattening",
            "type": "Quantity"
        },
        "P1103": {
            "title": "number of platform tracks",
            "type": "Quantity"
        },
        "P1104": {
            "title": "number of pages",
            "type": "Quantity"
        },
        "P1106": {
            "title": "Sandbox-Quantity",
            "type": "Quantity"
        },
        "P1107": {
            "title": "proportion",
            "type": "Quantity"
        },
        "P111": {
            "title": "measured physical quantity",
            "type": "Item"
        },
        "P1111": {
            "title": "votes received",
            "type": "Quantity"
        },
        "P1112": {
            "title": "Pok\u00e9dex number",
            "type": "Quantity"
        },
        "P1113": {
            "title": "number of episodes",
            "type": "Quantity"
        },
        "P1114": {
            "title": "quantity",
            "type": "Quantity"
        },
        "P1115": {
            "title": "ATVK ID",
            "type": "External identifier"
        },
        "P1116": {
            "title": "ELSTAT geographical code",
            "type": "External identifier"
        },
        "P1117": {
            "title": "pKa",
            "type": "Quantity"
        },
        "P112": {
            "title": "founded by",
            "type": "Item"
        },
        "P1121": {
            "title": "oxidation state",
            "type": "Quantity"
        },
        "P1122": {
            "title": "spin quantum number",
            "type": "Quantity"
        },
        "P1123": {
            "title": "parity",
            "type": "Quantity"
        },
        "P1125": {
            "title": "Gini coefficient",
            "type": "Quantity"
        },
        "P1126": {
            "title": "isospin quantum number",
            "type": "Quantity"
        },
        "P1127": {
            "title": "isospin z-component",
            "type": "Quantity"
        },
        "P1128": {
            "title": "employees",
            "type": "Quantity"
        },
        "P1129": {
            "title": "national team caps",
            "type": "Quantity"
        },
        "P113": {
            "title": "airline hub",
            "type": "Item"
        },
        "P1132": {
            "title": "number of participants",
            "type": "Quantity"
        },
        "P1133": {
            "title": "DGO4 identifier",
            "type": "External identifier"
        },
        "P1135": {
            "title": "nomenclatural status",
            "type": "Item"
        },
        "P1136": {
            "title": "solved by",
            "type": "Item"
        },
        "P1137": {
            "title": "fossil found in this unit",
            "type": "Item"
        },
        "P1138": {
            "title": "Kunstindeks Danmark Artist ID",
            "type": "External identifier"
        },
        "P1139": {
            "title": "floors below ground",
            "type": "Quantity"
        },
        "P114": {
            "title": "airline alliance",
            "type": "Item"
        },
        "P1140": {
            "title": "EHAK id",
            "type": "External identifier"
        },
        "P1141": {
            "title": "number of processor cores",
            "type": "Quantity"
        },
        "P1142": {
            "title": "political ideology",
            "type": "Item"
        },
        "P1143": {
            "title": "BN (Argentine) editions",
            "type": "External identifier"
        },
        "P1144": {
            "title": "LCOC LCCN (bibliographic)",
            "type": "External identifier"
        },
        "P1145": {
            "title": "Lagrangian point",
            "type": "Item"
        },
        "P1146": {
            "title": "IAAF ID",
            "type": "External identifier"
        },
        "P1148": {
            "title": "neutron number",
            "type": "Quantity"
        },
        "P1149": {
            "title": "Library of Congress Classification",
            "type": "String"
        },
        "P115": {
            "title": "home venue",
            "type": "Item"
        },
        "P1150": {
            "title": "Regensburg Classification",
            "type": "String"
        },
        "P1151": {
            "title": "topic's main Wikimedia portal",
            "type": "Item"
        },
        "P1153": {
            "title": "Scopus Author ID",
            "type": "External identifier"
        },
        "P1154": {
            "title": "Scopus EID",
            "type": "External identifier"
        },
        "P1155": {
            "title": "Scopus Affiliation ID",
            "type": "External identifier"
        },
        "P1156": {
            "title": "Scopus Source ID",
            "type": "External identifier"
        },
        "P1157": {
            "title": "US Congress Bio ID",
            "type": "External identifier"
        },
        "P1158": {
            "title": "location of landing",
            "type": "Item"
        },
        "P1159": {
            "title": "CODEN",
            "type": "External identifier"
        },
        "P1160": {
            "title": "ISO 4 abbreviation",
            "type": "External identifier"
        },
        "P1161": {
            "title": "Z39.5 abbreviation",
            "type": "String"
        },
        "P1162": {
            "title": "Bluebook abbreviation",
            "type": "String"
        },
        "P1163": {
            "title": "media type",
            "type": "String"
        },
        "P1164": {
            "title": "cardinality of the group",
            "type": "Quantity"
        },
        "P1165": {
            "title": "home world",
            "type": "Item"
        },
        "P1167": {
            "title": "USB vendor ID",
            "type": "External identifier"
        },
        "P1168": {
            "title": "municipality code (Denmark)",
            "type": "External identifier"
        },
        "P117": {
            "title": "chemical structure",
            "type": "Commons media file"
        },
        "P1170": {
            "title": "transmitted signal type",
            "type": "Item"
        },
        "P1171": {
            "title": "approximation algorithm",
            "type": "Item"
        },
        "P1172": {
            "title": "Geokod",
            "type": "External identifier"
        },
        "P1174": {
            "title": "visitors per year",
            "type": "Quantity"
        },
        "P118": {
            "title": "league",
            "type": "Item"
        },
        "P1181": {
            "title": "numeric value",
            "type": "Quantity"
        },
        "P1182": {
            "title": "LIBRIS editions",
            "type": "External identifier"
        },
        "P1183": {
            "title": "Gew\u00e4sserkennzahl",
            "type": "String"
        },
        "P1184": {
            "title": "handle",
            "type": "External identifier"
        },
        "P1185": {
            "title": "Rodovid ID",
            "type": "External identifier"
        },
        "P1186": {
            "title": "MEP directory ID",
            "type": "External identifier"
        },
        "P1187": {
            "title": "Dharma Drum Buddhist College person ID",
            "type": "External identifier"
        },
        "P1188": {
            "title": "Dharma Drum Buddhist College place ID",
            "type": "External identifier"
        },
        "P1189": {
            "title": "Chinese Library Classification",
            "type": "External identifier"
        },
        "P119": {
            "title": "place of burial",
            "type": "Item"
        },
        "P1190": {
            "title": "Universal Decimal Classification",
            "type": "String"
        },
        "P1191": {
            "title": "date of first performance",
            "type": "Point in time"
        },
        "P1192": {
            "title": "connecting service",
            "type": "Item"
        },
        "P1193": {
            "title": "prevalence",
            "type": "Quantity"
        },
        "P1194": {
            "title": "received signal type",
            "type": "Item"
        },
        "P1195": {
            "title": "file extension",
            "type": "String"
        },
        "P1196": {
            "title": "manner of death",
            "type": "Item"
        },
        "P1198": {
            "title": "unemployment rate",
            "type": "Quantity"
        },
        "P1199": {
            "title": "mode of inheritance",
            "type": "Item"
        },
        "P1200": {
            "title": "bodies of water basin category",
            "type": "Item"
        },
        "P1201": {
            "title": "space tug",
            "type": "Item"
        },
        "P1202": {
            "title": "carries scientific instrument",
            "type": "Item"
        },
        "P1203": {
            "title": "Finnish municipality number",
            "type": "External identifier"
        },
        "P1204": {
            "title": "Wikimedia portal's main topic",
            "type": "Item"
        },
        "P1207": {
            "title": "NUKAT (WarsawU) authorities",
            "type": "External identifier"
        },
        "P1208": {
            "title": "ISMN",
            "type": "External identifier"
        },
        "P1209": {
            "title": "CN",
            "type": "External identifier"
        },
        "P121": {
            "title": "item operated",
            "type": "Item"
        },
        "P1210": {
            "title": "supercharger",
            "type": "Item"
        },
        "P1211": {
            "title": "fuel system",
            "type": "Item"
        },
        "P1212": {
            "title": "Atlas ID",
            "type": "External identifier"
        },
        "P1213": {
            "title": "NLC authorities",
            "type": "External identifier"
        },
        "P1214": {
            "title": "Riksdagen person-id",
            "type": "External identifier"
        },
        "P1215": {
            "title": "apparent magnitude",
            "type": "Quantity"
        },
        "P1216": {
            "title": "National Heritage List for England number",
            "type": "External identifier"
        },
        "P1217": {
            "title": "Internet Broadway Database venue ID",
            "type": "External identifier"
        },
        "P1218": {
            "title": "Internet Broadway Database production ID",
            "type": "External identifier"
        },
        "P1219": {
            "title": "Internet Broadway Database show ID",
            "type": "External identifier"
        },
        "P122": {
            "title": "basic form of government",
            "type": "Item"
        },
        "P1220": {
            "title": "Internet Broadway Database person ID",
            "type": "External identifier"
        },
        "P1221": {
            "title": "compressor type",
            "type": "Item"
        },
        "P1222": {
            "title": "(deprecated) NARA person ID",
            "type": "External identifier"
        },
        "P1225": {
            "title": "US National Archives Identifier",
            "type": "External identifier"
        },
        "P1227": {
            "title": "astronomical filter",
            "type": "Item"
        },
        "P1229": {
            "title": "Openpolis ID",
            "type": "External identifier"
        },
        "P123": {
            "title": "publisher",
            "type": "Item"
        },
        "P1230": {
            "title": "JSTOR journal code",
            "type": "External identifier"
        },
        "P1232": {
            "title": "Linguist list code",
            "type": "External identifier"
        },
        "P1233": {
            "title": "ISFDB author ID",
            "type": "External identifier"
        },
        "P1234": {
            "title": "ISFDB publication ID",
            "type": "External identifier"
        },
        "P1235": {
            "title": "ISFDB series ID",
            "type": "External identifier"
        },
        "P1236": {
            "title": "Parsons code",
            "type": "External identifier"
        },
        "P1237": {
            "title": "Box Office Mojo film ID",
            "type": "External identifier"
        },
        "P1238": {
            "title": "Swedish Football Association ID",
            "type": "External identifier"
        },
        "P1239": {
            "title": "ISFDB publisher ID",
            "type": "External identifier"
        },
        "P1240": {
            "title": "Danish Bibliometric Research Indicator level",
            "type": "String"
        },
        "P1241": {
            "title": "Swiss Football Association Club Number",
            "type": "External identifier"
        },
        "P1242": {
            "title": "Theatricalia play ID",
            "type": "External identifier"
        },
        "P1243": {
            "title": "International Standard Recording Code",
            "type": "External identifier"
        },
        "P1245": {
            "title": "OmegaWiki Defined Meaning",
            "type": "External identifier"
        },
        "P1246": {
            "title": "patent number",
            "type": "External identifier"
        },
        "P1247": {
            "title": "compression ratio",
            "type": "Quantity"
        },
        "P1248": {
            "title": "KulturNav-id",
            "type": "External identifier"
        },
        "P1249": {
            "title": "time of earliest written record",
            "type": "Point in time"
        },
        "P1250": {
            "title": "Danish Bibliometric Research Indicator (BFI) SNO/CNO",
            "type": "External identifier"
        },
        "P1251": {
            "title": "ABS ASCL code",
            "type": "External identifier"
        },
        "P1252": {
            "title": "AUSTLANG code",
            "type": "External identifier"
        },
        "P1253": {
            "title": "BCU Ecrivainsvd",
            "type": "External identifier"
        },
        "P1254": {
            "title": "Slovenska biografija ID",
            "type": "External identifier"
        },
        "P1255": {
            "title": "Helveticarchives ID",
            "type": "External identifier"
        },
        "P1256": {
            "title": "Iconclass notation",
            "type": "External identifier"
        },
        "P1257": {
            "title": "depicts Iconclass notation",
            "type": "String"
        },
        "P1258": {
            "title": "Rotten Tomatoes ID",
            "type": "External identifier"
        },
        "P1259": {
            "title": "coordinates of the point of view",
            "type": "Geographic coordinates"
        },
        "P126": {
            "title": "maintained by",
            "type": "Item"
        },
        "P1260": {
            "title": "Cultural heritage database in Sweden ID",
            "type": "External identifier"
        },
        "P1261": {
            "title": "Rundata",
            "type": "External identifier"
        },
        "P1262": {
            "title": "RA\u00c4 number",
            "type": "External identifier"
        },
        "P1263": {
            "title": "NNDB people ID",
            "type": "External identifier"
        },
        "P1264": {
            "title": "valid in period",
            "type": "Item"
        },
        "P1265": {
            "title": "AlloCin\u00e9 film ID",
            "type": "External identifier"
        },
        "P1266": {
            "title": "AlloCin\u00e9 person ID",
            "type": "External identifier"
        },
        "P1267": {
            "title": "AlloCin\u00e9 series ID",
            "type": "External identifier"
        },
        "P1268": {
            "title": "represents",
            "type": "Item"
        },
        "P1269": {
            "title": "facet of",
            "type": "Item"
        },
        "P127": {
            "title": "owned by",
            "type": "Item"
        },
        "P1270": {
            "title": "Norwegian Register journal ID",
            "type": "External identifier"
        },
        "P1271": {
            "title": "Norway Database for Statistics on Higher education publisher ID",
            "type": "External identifier"
        },
        "P1272": {
            "title": "Norway Import Service and Registration Authority periodical code",
            "type": "External identifier"
        },
        "P1273": {
            "title": "CANTIC-ID",
            "type": "External identifier"
        },
        "P1274": {
            "title": "ISFDB title ID",
            "type": "External identifier"
        },
        "P1275": {
            "title": "Norway Import Service and Registration Authority publisher code",
            "type": "External identifier"
        },
        "P1276": {
            "title": "Dictionnaire du Jura ID",
            "type": "External identifier"
        },
        "P1277": {
            "title": "Jufo ID",
            "type": "External identifier"
        },
        "P1278": {
            "title": "Legal Entity ID",
            "type": "External identifier"
        },
        "P1279": {
            "title": "inflation rate",
            "type": "Quantity"
        },
        "P128": {
            "title": "regulates (molecular biology)",
            "type": "Item"
        },
        "P1280": {
            "title": "CONOR ID",
            "type": "External identifier"
        },
        "P1281": {
            "title": "WOEID",
            "type": "External identifier"
        },
        "P1282": {
            "title": "OSM tag or key",
            "type": "String"
        },
        "P1283": {
            "title": "filmography",
            "type": "Item"
        },
        "P1284": {
            "title": "Munzinger IBA",
            "type": "External identifier"
        },
        "P1285": {
            "title": "Munzinger Sport number",
            "type": "External identifier"
        },
        "P1286": {
            "title": "Munzinger Pop ID",
            "type": "External identifier"
        },
        "P1287": {
            "title": "KDG Komponisten der Gegenwart",
            "type": "External identifier"
        },
        "P1288": {
            "title": "KLG Kritisches Lexikon der Gegenwartsliteratur",
            "type": "External identifier"
        },
        "P1289": {
            "title": "KLfG Critical Dictionary of foreign contemporary literature",
            "type": "External identifier"
        },
        "P129": {
            "title": "physically interacts with",
            "type": "Item"
        },
        "P1290": {
            "title": "godparent",
            "type": "Item"
        },
        "P1291": {
            "title": "Association Authors of Switzerland ID",
            "type": "External identifier"
        },
        "P1292": {
            "title": "DNB editions",
            "type": "External identifier"
        },
        "P1293": {
            "title": "Royal Aero Club Aviator's Certificate ID",
            "type": "External identifier"
        },
        "P1294": {
            "title": "WWF ecoregion code",
            "type": "External identifier"
        },
        "P1295": {
            "title": "emissivity",
            "type": "Quantity"
        },
        "P1296": {
            "title": "Gran Enciclop\u00e8dia Catalana ID",
            "type": "External identifier"
        },
        "P1297": {
            "title": "IRS Employer Identification Number",
            "type": "External identifier"
        },
        "P1299": {
            "title": "depicted by",
            "type": "Item"
        },
        "P1300": {
            "title": "bibcode",
            "type": "External identifier"
        },
        "P1301": {
            "title": "number of elevators",
            "type": "Quantity"
        },
        "P1302": {
            "title": "primary destinations",
            "type": "Item"
        },
        "P1303": {
            "title": "instrument",
            "type": "Item"
        },
        "P1304": {
            "title": "central bank",
            "type": "Item"
        },
        "P1305": {
            "title": "Skyscraper Center ID",
            "type": "External identifier"
        },
        "P1307": {
            "title": "Swiss parliament ID",
            "type": "External identifier"
        },
        "P1308": {
            "title": "officeholder",
            "type": "Item"
        },
        "P1309": {
            "title": "EGAXA ID",
            "type": "External identifier"
        },
        "P131": {
            "title": "located in the administrative territorial entity",
            "type": "Item"
        },
        "P1310": {
            "title": "statement disputed by",
            "type": "Item"
        },
        "P1311": {
            "title": "lostbridges.org ID",
            "type": "External identifier"
        },
        "P1312": {
            "title": "has facet polytope",
            "type": "Item"
        },
        "P1313": {
            "title": "office held by head of government",
            "type": "Item"
        },
        "P1314": {
            "title": "number of spans",
            "type": "Quantity"
        },
        "P1315": {
            "title": "People Australia ID",
            "type": "External identifier"
        },
        "P1316": {
            "title": "SMDB ID",
            "type": "External identifier"
        },
        "P1317": {
            "title": "floruit",
            "type": "Point in time"
        },
        "P1318": {
            "title": "proved by",
            "type": "Item"
        },
        "P1319": {
            "title": "earliest date",
            "type": "Point in time"
        },
        "P1320": {
            "title": "OpenCorporates ID",
            "type": "External identifier"
        },
        "P1321": {
            "title": "place of origin (Switzerland)",
            "type": "Item"
        },
        "P1322": {
            "title": "dual to",
            "type": "Item"
        },
        "P1323": {
            "title": "Terminologia Anatomica 98 ID",
            "type": "External identifier"
        },
        "P1324": {
            "title": "source code repository",
            "type": "URL"
        },
        "P1325": {
            "title": "external data available at",
            "type": "URL"
        },
        "P1326": {
            "title": "latest date",
            "type": "Point in time"
        },
        "P1327": {
            "title": "professional or sports partner",
            "type": "Item"
        },
        "P1329": {
            "title": "phone number",
            "type": "String"
        },
        "P1330": {
            "title": "MusicBrainz instrument ID",
            "type": "External identifier"
        },
        "P1331": {
            "title": "PACE member ID",
            "type": "External identifier"
        },
        "P1332": {
            "title": "coordinate of northernmost point",
            "type": "Geographic coordinates"
        },
        "P1333": {
            "title": "coordinate of southernmost point",
            "type": "Geographic coordinates"
        },
        "P1334": {
            "title": "coordinate of easternmost point",
            "type": "Geographic coordinates"
        },
        "P1335": {
            "title": "coordinate of westernmost point",
            "type": "Geographic coordinates"
        },
        "P1336": {
            "title": "territory claimed by",
            "type": "Item"
        },
        "P1338": {
            "title": "EPSG ID",
            "type": "External identifier"
        },
        "P1339": {
            "title": "number of injured",
            "type": "Quantity"
        },
        "P134": {
            "title": "has dialect (DEPRECATED)",
            "type": "Item"
        },
        "P1340": {
            "title": "eye color",
            "type": "Item"
        },
        "P1341": {
            "title": "Italian Chamber of Deputies dati ID",
            "type": "External identifier"
        },
        "P1342": {
            "title": "number of seats",
            "type": "Quantity"
        },
        "P1343": {
            "title": "described by source",
            "type": "Item"
        },
        "P1344": {
            "title": "participant of",
            "type": "Item"
        },
        "P1345": {
            "title": "number of victims made by killer",
            "type": "Quantity"
        },
        "P1346": {
            "title": "winner",
            "type": "Item"
        },
        "P1347": {
            "title": "military casualty classification",
            "type": "Item"
        },
        "P1348": {
            "title": "AlgaeBase URL",
            "type": "URL"
        },
        "P1349": {
            "title": "ploidy",
            "type": "Item"
        },
        "P135": {
            "title": "movement",
            "type": "Item"
        },
        "P1350": {
            "title": "number of matches played",
            "type": "Quantity"
        },
        "P1351": {
            "title": "number of points/goals/set scored",
            "type": "Quantity"
        },
        "P1352": {
            "title": "ranking",
            "type": "Quantity"
        },
        "P1353": {
            "title": "original spelling",
            "type": "String"
        },
        "P1354": {
            "title": "shown with features",
            "type": "Item"
        },
        "P1355": {
            "title": "number of wins",
            "type": "Quantity"
        },
        "P1356": {
            "title": "number of losses",
            "type": "Quantity"
        },
        "P1357": {
            "title": "matches/games drawn/tied",
            "type": "Quantity"
        },
        "P1358": {
            "title": "points for",
            "type": "Quantity"
        },
        "P1359": {
            "title": "number of points/goals conceded",
            "type": "Quantity"
        },
        "P136": {
            "title": "genre",
            "type": "Item"
        },
        "P1360": {
            "title": "Monte Carlo Particle Number",
            "type": "String"
        },
        "P1362": {
            "title": "Theaterlexikon der Schweiz online ID",
            "type": "External identifier"
        },
        "P1363": {
            "title": "points/goal scored by",
            "type": "Item"
        },
        "P1364": {
            "title": "ITTF table tennis player ID",
            "type": "External identifier"
        },
        "P1365": {
            "title": "replaces",
            "type": "Item"
        },
        "P1366": {
            "title": "replaced by",
            "type": "Item"
        },
        "P1367": {
            "title": "Art UK artist ID",
            "type": "External identifier"
        },
        "P1368": {
            "title": "LNB ID",
            "type": "External identifier"
        },
        "P1369": {
            "title": "Iranian National Heritage registration number",
            "type": "External identifier"
        },
        "P137": {
            "title": "operator",
            "type": "Item"
        },
        "P1370": {
            "title": "IHSI ID",
            "type": "External identifier"
        },
        "P1371": {
            "title": "ASI Monument ID",
            "type": "External identifier"
        },
        "P1372": {
            "title": "binding of software library",
            "type": "Item"
        },
        "P1373": {
            "title": "daily patronage",
            "type": "Quantity"
        },
        "P1375": {
            "title": "NSK ID",
            "type": "External identifier"
        },
        "P1376": {
            "title": "capital of",
            "type": "Item"
        },
        "P1377": {
            "title": "MTR station code",
            "type": "External identifier"
        },
        "P1378": {
            "title": "China railway TMIS station code",
            "type": "External identifier"
        },
        "P138": {
            "title": "named after",
            "type": "Item"
        },
        "P1380": {
            "title": "UglyBridges.com ID",
            "type": "External identifier"
        },
        "P1381": {
            "title": "bridgehunter.com ID",
            "type": "External identifier"
        },
        "P1382": {
            "title": "partially coincident with",
            "type": "Item"
        },
        "P1383": {
            "title": "contains settlement",
            "type": "Item"
        },
        "P1385": {
            "title": "Enciclop\u00e9dia A\u00e7oriana ID",
            "type": "External identifier"
        },
        "P1386": {
            "title": "Japanese High School Code",
            "type": "External identifier"
        },
        "P1387": {
            "title": "political alignment",
            "type": "Item"
        },
        "P1388": {
            "title": "German regional key",
            "type": "External identifier"
        },
        "P1389": {
            "title": "product certification",
            "type": "Item"
        },
        "P1390": {
            "title": "match time of event",
            "type": "Quantity"
        },
        "P1391": {
            "title": "Index Fungorum ID",
            "type": "External identifier"
        },
        "P1392": {
            "title": "ComicBookDB ID",
            "type": "External identifier"
        },
        "P1393": {
            "title": "proxy",
            "type": "Item"
        },
        "P1394": {
            "title": "Glottolog code",
            "type": "External identifier"
        },
        "P1395": {
            "title": "National Cancer Institute ID",
            "type": "External identifier"
        },
        "P1396": {
            "title": "Linguasphere code",
            "type": "String"
        },
        "P1397": {
            "title": "State Catalogue of Geographical Names (Russia) ID",
            "type": "External identifier"
        },
        "P1398": {
            "title": "structure replaces",
            "type": "Item"
        },
        "P1399": {
            "title": "convicted of",
            "type": "Item"
        },
        "P14": {
            "title": "graphic symbol of thoroughfare",
            "type": "Commons media file"
        },
        "P140": {
            "title": "religion",
            "type": "Item"
        },
        "P1400": {
            "title": "FCC Facility ID",
            "type": "External identifier"
        },
        "P1401": {
            "title": "bug tracking system",
            "type": "URL"
        },
        "P1402": {
            "title": "Foundational Model of Anatomy ID",
            "type": "String"
        },
        "P1403": {
            "title": "original combination",
            "type": "Item"
        },
        "P1404": {
            "title": "World Glacier Inventory ID",
            "type": "External identifier"
        },
        "P1406": {
            "title": "script directionality",
            "type": "Item"
        },
        "P1407": {
            "title": "MusicBrainz series ID",
            "type": "External identifier"
        },
        "P1408": {
            "title": "licensed to broadcast to",
            "type": "Item"
        },
        "P1409": {
            "title": "Cycling Archives cyclist ID",
            "type": "External identifier"
        },
        "P141": {
            "title": "IUCN conservation status",
            "type": "Item"
        },
        "P1410": {
            "title": "number of representatives in an organization/legislature",
            "type": "Quantity"
        },
        "P1411": {
            "title": "nominated for",
            "type": "Item"
        },
        "P1412": {
            "title": "languages spoken, written or signed",
            "type": "Item"
        },
        "P1414": {
            "title": "GUI toolkit or framework",
            "type": "Item"
        },
        "P1415": {
            "title": "Oxford Dictionary of National Biography ID",
            "type": "External identifier"
        },
        "P1416": {
            "title": "affiliation",
            "type": "Item"
        },
        "P1417": {
            "title": "Encyclop\u00e6dia Britannica Online ID",
            "type": "External identifier"
        },
        "P1418": {
            "title": "orbits completed",
            "type": "Quantity"
        },
        "P1419": {
            "title": "shape",
            "type": "Item"
        },
        "P1420": {
            "title": "taxon synonym",
            "type": "Item"
        },
        "P1421": {
            "title": "GRIN URL",
            "type": "URL"
        },
        "P1422": {
            "title": "Sandrart.net person ID",
            "type": "External identifier"
        },
        "P1423": {
            "title": "template's main topic",
            "type": "Item"
        },
        "P1424": {
            "title": "topic's main template",
            "type": "Item"
        },
        "P1425": {
            "title": "ecoregion (WWF)",
            "type": "Item"
        },
        "P1427": {
            "title": "start point",
            "type": "Item"
        },
        "P1428": {
            "title": "Lost Art-ID",
            "type": "External identifier"
        },
        "P1429": {
            "title": "has pet",
            "type": "Item"
        },
        "P143": {
            "title": "imported from",
            "type": "Item"
        },
        "P1430": {
            "title": "OpenPlaques subject ID",
            "type": "External identifier"
        },
        "P1431": {
            "title": "executive producer",
            "type": "Item"
        },
        "P1432": {
            "title": "B-side",
            "type": "Item"
        },
        "P1433": {
            "title": "published in",
            "type": "Item"
        },
        "P1434": {
            "title": "takes place in fictional universe",
            "type": "Item"
        },
        "P1435": {
            "title": "heritage designation",
            "type": "Item"
        },
        "P1436": {
            "title": "collection or exhibition size",
            "type": "Quantity"
        },
        "P1437": {
            "title": "plea",
            "type": "Item"
        },
        "P1438": {
            "title": "Jewish Encyclopedia ID (Russian)",
            "type": "String"
        },
        "P1439": {
            "title": "Norsk filmografi ID",
            "type": "External identifier"
        },
        "P144": {
            "title": "based on",
            "type": "Item"
        },
        "P1440": {
            "title": "FIDE ID",
            "type": "External identifier"
        },
        "P1441": {
            "title": "present in work",
            "type": "Item"
        },
        "P1442": {
            "title": "image of grave",
            "type": "Commons media file"
        },
        "P1443": {
            "title": "score method",
            "type": "Item"
        },
        "P1444": {
            "title": "destination point",
            "type": "Item"
        },
        "P1445": {
            "title": "fictional universe described in",
            "type": "Item"
        },
        "P1446": {
            "title": "number of missing",
            "type": "Quantity"
        },
        "P1447": {
            "title": "Sports-Reference.com Olympic athlete ID",
            "type": "External identifier"
        },
        "P1448": {
            "title": "official name",
            "type": "Monolingual text"
        },
        "P1449": {
            "title": "nickname",
            "type": "Monolingual text"
        },
        "P1450": {
            "title": "Sandbox Monolingual text",
            "type": "Monolingual text"
        },
        "P1451": {
            "title": "motto text",
            "type": "Monolingual text"
        },
        "P1453": {
            "title": "catholic.ru ID",
            "type": "External identifier"
        },
        "P1454": {
            "title": "legal form",
            "type": "Item"
        },
        "P1455": {
            "title": "list of works",
            "type": "Item"
        },
        "P1456": {
            "title": "list of monuments",
            "type": "Item"
        },
        "P1457": {
            "title": "absolute magnitude",
            "type": "Quantity"
        },
        "P1458": {
            "title": "color index",
            "type": "Quantity"
        },
        "P1459": {
            "title": "Cadw Building ID",
            "type": "External identifier"
        },
        "P1460": {
            "title": "NIEA building ID",
            "type": "External identifier"
        },
        "P1461": {
            "title": "Patientplus ID",
            "type": "String"
        },
        "P1462": {
            "title": "standards body",
            "type": "Item"
        },
        "P1463": {
            "title": "PRDL Author ID",
            "type": "External identifier"
        },
        "P1464": {
            "title": "category for people born here",
            "type": "Item"
        },
        "P1465": {
            "title": "category for people who died here",
            "type": "Item"
        },
        "P1466": {
            "title": "WALS lect code",
            "type": "External identifier"
        },
        "P1467": {
            "title": "WALS genus code",
            "type": "External identifier"
        },
        "P1468": {
            "title": "WALS family code",
            "type": "External identifier"
        },
        "P1469": {
            "title": "FIFA player ID",
            "type": "External identifier"
        },
        "P1470": {
            "title": "maximum glide ratio",
            "type": "Quantity"
        },
        "P1471": {
            "title": "reporting mark",
            "type": "String"
        },
        "P1472": {
            "title": "Commons Creator page",
            "type": "String"
        },
        "P1473": {
            "title": "Nupill Literatura Digital - Author",
            "type": "External identifier"
        },
        "P1474": {
            "title": "Nupill Literatura Digital - Document",
            "type": "External identifier"
        },
        "P1476": {
            "title": "title",
            "type": "Monolingual text"
        },
        "P1477": {
            "title": "birth name",
            "type": "Monolingual text"
        },
        "P1478": {
            "title": "has immediate cause",
            "type": "Item"
        },
        "P1479": {
            "title": "has contributing factor",
            "type": "Item"
        },
        "P1480": {
            "title": "sourcing circumstances",
            "type": "Item"
        },
        "P1481": {
            "title": "vici.org ID",
            "type": "External identifier"
        },
        "P1482": {
            "title": "Stack Exchange tag",
            "type": "URL"
        },
        "P1483": {
            "title": "kulturnoe-nasledie.ru ID",
            "type": "External identifier"
        },
        "P149": {
            "title": "architectural style",
            "type": "Item"
        },
        "P15": {
            "title": "route map",
            "type": "Commons media file"
        },
        "P150": {
            "title": "contains administrative territorial entity",
            "type": "Item"
        },
        "P1529": {
            "title": "Gertrude identifier",
            "type": "External identifier"
        },
        "P1531": {
            "title": "parent(s) of this hybrid",
            "type": "Item"
        },
        "P1532": {
            "title": "country for sport",
            "type": "Item"
        },
        "P1533": {
            "title": "family name identical to this given name",
            "type": "Item"
        },
        "P1534": {
            "title": "end cause",
            "type": "Item"
        },
        "P1535": {
            "title": "used by",
            "type": "Item"
        },
        "P1536": {
            "title": "immediate cause of",
            "type": "Item"
        },
        "P1537": {
            "title": "contributing factor of",
            "type": "Item"
        },
        "P1538": {
            "title": "number of households",
            "type": "Quantity"
        },
        "P1539": {
            "title": "female population",
            "type": "Quantity"
        },
        "P154": {
            "title": "logo image",
            "type": "Commons media file"
        },
        "P1540": {
            "title": "male population",
            "type": "Quantity"
        },
        "P1541": {
            "title": "Cycling Quotient male cyclist ID",
            "type": "External identifier"
        },
        "P1542": {
            "title": "has effect",
            "type": "Item"
        },
        "P1543": {
            "title": "monogram",
            "type": "Commons media file"
        },
        "P1544": {
            "title": "Federal Register Document Number",
            "type": "External identifier"
        },
        "P1545": {
            "title": "series ordinal",
            "type": "String"
        },
        "P1546": {
            "title": "motto",
            "type": "Item"
        },
        "P1547": {
            "title": "depends on software",
            "type": "Item"
        },
        "P1548": {
            "title": "maximum Strahler number",
            "type": "Quantity"
        },
        "P1549": {
            "title": "demonym",
            "type": "Monolingual text"
        },
        "P155": {
            "title": "follows",
            "type": "Item"
        },
        "P1550": {
            "title": "Orphanet ID",
            "type": "External identifier"
        },
        "P1551": {
            "title": "Exceptional heritage of Wallonia ID",
            "type": "External identifier"
        },
        "P1552": {
            "title": "has quality",
            "type": "Item"
        },
        "P1553": {
            "title": "Yandex.Music artist ID",
            "type": "External identifier"
        },
        "P1554": {
            "title": "UBERON ID",
            "type": "External identifier"
        },
        "P1555": {
            "title": "Executive Order number",
            "type": "External identifier"
        },
        "P1556": {
            "title": "zbMATH author ID",
            "type": "External identifier"
        },
        "P1557": {
            "title": "manifestation of",
            "type": "Item"
        },
        "P1558": {
            "title": "tempo marking",
            "type": "Item"
        },
        "P1559": {
            "title": "name in native language",
            "type": "Monolingual text"
        },
        "P156": {
            "title": "followed by",
            "type": "Item"
        },
        "P1560": {
            "title": "given name version for other gender",
            "type": "Item"
        },
        "P1561": {
            "title": "number of survivors",
            "type": "Quantity"
        },
        "P1562": {
            "title": "AllMovie movie ID",
            "type": "External identifier"
        },
        "P1563": {
            "title": "MacTutor id (biographies)",
            "type": "External identifier"
        },
        "P1564": {
            "title": "At the Circulating Library ID",
            "type": "External identifier"
        },
        "P1565": {
            "title": "Enciclopedia de la Literatura en M\u00e9xico ID",
            "type": "External identifier"
        },
        "P1566": {
            "title": "GeoNames ID",
            "type": "External identifier"
        },
        "P1567": {
            "title": "NIS/INS code",
            "type": "External identifier"
        },
        "P1568": {
            "title": "domain",
            "type": "Item"
        },
        "P157": {
            "title": "killed by",
            "type": "Item"
        },
        "P1571": {
            "title": "codomain",
            "type": "Item"
        },
        "P1573": {
            "title": "BBC Genome ID",
            "type": "External identifier"
        },
        "P1574": {
            "title": "exemplar of",
            "type": "Item"
        },
        "P1575": {
            "title": "RISS catalog",
            "type": "External identifier"
        },
        "P1576": {
            "title": "lifestyle",
            "type": "Item"
        },
        "P1577": {
            "title": "Gregory-Aland-Number",
            "type": "External identifier"
        },
        "P1578": {
            "title": "Gmelin number",
            "type": "External identifier"
        },
        "P1579": {
            "title": "Beilstein Registry Number",
            "type": "External identifier"
        },
        "P158": {
            "title": "seal image",
            "type": "Commons media file"
        },
        "P1580": {
            "title": "University of Barcelona authority ID",
            "type": "External identifier"
        },
        "P1581": {
            "title": "official blog",
            "type": "URL"
        },
        "P1582": {
            "title": "natural product of taxon",
            "type": "Item"
        },
        "P1583": {
            "title": "MalaCards ID",
            "type": "External identifier"
        },
        "P1584": {
            "title": "Pleiades ID",
            "type": "External identifier"
        },
        "P1585": {
            "title": "Brazilian municipality code",
            "type": "External identifier"
        },
        "P1586": {
            "title": "Catalan object of cultural interest ID",
            "type": "External identifier"
        },
        "P1587": {
            "title": "Slovene Cultural Heritage Register ID",
            "type": "External identifier"
        },
        "P1588": {
            "title": "village code of Indonesia",
            "type": "String"
        },
        "P1589": {
            "title": "deepest point",
            "type": "Item"
        },
        "P159": {
            "title": "headquarters location",
            "type": "Item"
        },
        "P1590": {
            "title": "number of casualties",
            "type": "Quantity"
        },
        "P1591": {
            "title": "defendant",
            "type": "Item"
        },
        "P1592": {
            "title": "prosecutor",
            "type": "Item"
        },
        "P1593": {
            "title": "defender",
            "type": "Item"
        },
        "P1594": {
            "title": "judge",
            "type": "Item"
        },
        "P1595": {
            "title": "charge",
            "type": "Item"
        },
        "P1596": {
            "title": "penalty",
            "type": "Item"
        },
        "P1598": {
            "title": "consecrator",
            "type": "Item"
        },
        "P1599": {
            "title": "Cambridge Alumni Database ID",
            "type": "External identifier"
        },
        "P16": {
            "title": "highway system",
            "type": "Item"
        },
        "P1600": {
            "title": "Inventari del Patrimoni Arquitect\u00f2nic de Catalunya code",
            "type": "External identifier"
        },
        "P1601": {
            "title": "Esperantist ID",
            "type": "External identifier"
        },
        "P1602": {
            "title": "Art UK venue ID",
            "type": "External identifier"
        },
        "P1603": {
            "title": "number of cases",
            "type": "Quantity"
        },
        "P1604": {
            "title": "biosafety level",
            "type": "Item"
        },
        "P1605": {
            "title": "has natural reservoir",
            "type": "Item"
        },
        "P1606": {
            "title": "natural reservoir of",
            "type": "Item"
        },
        "P1607": {
            "title": "Dialnet author ID",
            "type": "External identifier"
        },
        "P1608": {
            "title": "Dialnet book ID",
            "type": "External identifier"
        },
        "P1609": {
            "title": "Dialnet journal",
            "type": "External identifier"
        },
        "P161": {
            "title": "cast member",
            "type": "Item"
        },
        "P1610": {
            "title": "Dialnet article",
            "type": "External identifier"
        },
        "P1611": {
            "title": "NATO code for grade",
            "type": "Item"
        },
        "P1612": {
            "title": "Commons Institution page",
            "type": "String"
        },
        "P1613": {
            "title": "IRC channel",
            "type": "URL"
        },
        "P1614": {
            "title": "History of Parliament ID",
            "type": "External identifier"
        },
        "P1615": {
            "title": "CLARA-ID",
            "type": "External identifier"
        },
        "P1616": {
            "title": "SIREN number",
            "type": "External identifier"
        },
        "P1617": {
            "title": "BBC Things ID",
            "type": "External identifier"
        },
        "P1618": {
            "title": "sport number",
            "type": "String"
        },
        "P1619": {
            "title": "date of official opening",
            "type": "Point in time"
        },
        "P162": {
            "title": "producer",
            "type": "Item"
        },
        "P1620": {
            "title": "plaintiff",
            "type": "Item"
        },
        "P1621": {
            "title": "detail map",
            "type": "Commons media file"
        },
        "P1622": {
            "title": "driving side",
            "type": "Item"
        },
        "P1624": {
            "title": "MarineTraffic Port ID",
            "type": "External identifier"
        },
        "P1625": {
            "title": "has melody",
            "type": "Item"
        },
        "P1626": {
            "title": "Thai cultural heritage ID",
            "type": "External identifier"
        },
        "P1627": {
            "title": "Ethnologue.com code",
            "type": "External identifier"
        },
        "P1628": {
            "title": "equivalent property",
            "type": "URL"
        },
        "P1629": {
            "title": "subject item of this property",
            "type": "Item"
        },
        "P163": {
            "title": "flag",
            "type": "Item"
        },
        "P1630": {
            "title": "formatter URL",
            "type": "String"
        },
        "P1631": {
            "title": "China Vitae ID",
            "type": "External identifier"
        },
        "P1632": {
            "title": "Hermann-Mauguin notation",
            "type": "External identifier"
        },
        "P1635": {
            "title": "religious name",
            "type": "Monolingual text"
        },
        "P1636": {
            "title": "date of baptism in early childhood",
            "type": "Point in time"
        },
        "P1637": {
            "title": "undercarriage",
            "type": "Item"
        },
        "P1638": {
            "title": "codename",
            "type": "Monolingual text"
        },
        "P1639": {
            "title": "pendant of",
            "type": "Item"
        },
        "P1640": {
            "title": "curator",
            "type": "Item"
        },
        "P1641": {
            "title": "port",
            "type": "Quantity"
        },
        "P1642": {
            "title": "acquisition transaction",
            "type": "Item"
        },
        "P1643": {
            "title": "departure transaction",
            "type": "Item"
        },
        "P1644": {
            "title": "MessesInfo ID",
            "type": "External identifier"
        },
        "P1645": {
            "title": "NIST/CODATA ID",
            "type": "External identifier"
        },
        "P1647": {
            "title": "subproperty of",
            "type": "Property"
        },
        "P1648": {
            "title": "Dictionary of Welsh Biography ID",
            "type": "External identifier"
        },
        "P1649": {
            "title": "KMDb person ID",
            "type": "External identifier"
        },
        "P1650": {
            "title": "BBF ID",
            "type": "External identifier"
        },
        "P1651": {
            "title": "YouTube video ID",
            "type": "External identifier"
        },
        "P1652": {
            "title": "referee",
            "type": "Item"
        },
        "P1653": {
            "title": "TERYT municipality code",
            "type": "External identifier"
        },
        "P1654": {
            "title": "wing configuration",
            "type": "Item"
        },
        "P1656": {
            "title": "unveiled by",
            "type": "Item"
        },
        "P1657": {
            "title": "MPAA film rating",
            "type": "Item"
        },
        "P1659": {
            "title": "see also",
            "type": "Property"
        },
        "P166": {
            "title": "award received",
            "type": "Item"
        },
        "P1660": {
            "title": "has index case",
            "type": "Item"
        },
        "P1661": {
            "title": "Alexa rank",
            "type": "Quantity"
        },
        "P1662": {
            "title": "DOI prefix",
            "type": "External identifier"
        },
        "P1663": {
            "title": "ProCyclingStats cyclist ID",
            "type": "External identifier"
        },
        "P1664": {
            "title": "Cycling Database ID",
            "type": "External identifier"
        },
        "P1665": {
            "title": "Chess Games ID",
            "type": "External identifier"
        },
        "P1666": {
            "title": "Chess Club ID",
            "type": "External identifier"
        },
        "P1667": {
            "title": "TGN ID",
            "type": "External identifier"
        },
        "P1668": {
            "title": "ATCvet",
            "type": "External identifier"
        },
        "P1669": {
            "title": "CONA ID",
            "type": "External identifier"
        },
        "P167": {
            "title": "structure replaced by",
            "type": "Item"
        },
        "P1670": {
            "title": "LAC ID",
            "type": "External identifier"
        },
        "P1671": {
            "title": "route number",
            "type": "String"
        },
        "P1672": {
            "title": "this taxon is source of",
            "type": "Item"
        },
        "P1673": {
            "title": "general formula",
            "type": "String"
        },
        "P1674": {
            "title": "number confirmed",
            "type": "Quantity"
        },
        "P1675": {
            "title": "number probable",
            "type": "Quantity"
        },
        "P1676": {
            "title": "number suspected",
            "type": "Quantity"
        },
        "P1677": {
            "title": "index case of",
            "type": "Item"
        },
        "P1678": {
            "title": "has vertex figure",
            "type": "Item"
        },
        "P1679": {
            "title": "Art UK artwork ID",
            "type": "External identifier"
        },
        "P1680": {
            "title": "subtitle",
            "type": "Monolingual text"
        },
        "P1683": {
            "title": "quote",
            "type": "Monolingual text"
        },
        "P1684": {
            "title": "inscription",
            "type": "Monolingual text"
        },
        "P1685": {
            "title": "Pok\u00e9mon browser number",
            "type": "String"
        },
        "P1686": {
            "title": "for work",
            "type": "Item"
        },
        "P1687": {
            "title": "Wikidata property",
            "type": "Property"
        },
        "P1688": {
            "title": "AniDB ID",
            "type": "External identifier"
        },
        "P1689": {
            "title": "central government debt as a percent of GDP",
            "type": "Quantity"
        },
        "P169": {
            "title": "chief executive officer",
            "type": "Item"
        },
        "P1690": {
            "title": "ICD-10-PCS",
            "type": "External identifier"
        },
        "P1691": {
            "title": "operations and procedures key (OPS)",
            "type": "External identifier"
        },
        "P1692": {
            "title": "ICD-9-CM",
            "type": "String"
        },
        "P1693": {
            "title": "Terminologia Embryologica",
            "type": "External identifier"
        },
        "P1694": {
            "title": "Terminologia Histologica",
            "type": "External identifier"
        },
        "P1695": {
            "title": "NLP ID",
            "type": "External identifier"
        },
        "P1696": {
            "title": "inverse of",
            "type": "Property"
        },
        "P1697": {
            "title": "total valid votes",
            "type": "Quantity"
        },
        "P1699": {
            "title": "SkyscraperPage building id",
            "type": "External identifier"
        },
        "P17": {
            "title": "country",
            "type": "Item"
        },
        "P170": {
            "title": "creator",
            "type": "Item"
        },
        "P1700": {
            "title": "SIPA ID",
            "type": "External identifier"
        },
        "P1702": {
            "title": "IGESPAR ID",
            "type": "External identifier"
        },
        "P1703": {
            "title": "is pollinated by",
            "type": "Item"
        },
        "P1704": {
            "title": "is pollinator of",
            "type": "Item"
        },
        "P1705": {
            "title": "native label",
            "type": "Monolingual text"
        },
        "P1706": {
            "title": "together with",
            "type": "Item"
        },
        "P1707": {
            "title": "DAAO ID",
            "type": "External identifier"
        },
        "P1708": {
            "title": "LfDS object ID",
            "type": "External identifier"
        },
        "P1709": {
            "title": "equivalent class",
            "type": "URL"
        },
        "P171": {
            "title": "parent taxon",
            "type": "Item"
        },
        "P1710": {
            "title": "S\u00e4chsische Biografie",
            "type": "External identifier"
        },
        "P1711": {
            "title": "British Museum person-institution",
            "type": "External identifier"
        },
        "P1712": {
            "title": "Metacritic ID",
            "type": "External identifier"
        },
        "P1713": {
            "title": "biography at the Bundestag of Germany",
            "type": "URL"
        },
        "P1714": {
            "title": "Journalisted ID",
            "type": "External identifier"
        },
        "P1715": {
            "title": "RKD/ESD (Slovenia) ID",
            "type": "External identifier"
        },
        "P1716": {
            "title": "brand",
            "type": "Item"
        },
        "P1717": {
            "title": "SANDRE ID",
            "type": "External identifier"
        },
        "P172": {
            "title": "ethnic group",
            "type": "Item"
        },
        "P1721": {
            "title": "pinyin transliteration",
            "type": "String"
        },
        "P1725": {
            "title": "beats per minute",
            "type": "Quantity"
        },
        "P1726": {
            "title": "Florentine musea Inventario 1890 ID",
            "type": "External identifier"
        },
        "P1727": {
            "title": "Flora of North America taxon ID",
            "type": "External identifier"
        },
        "P1728": {
            "title": "AllMusic artist ID",
            "type": "External identifier"
        },
        "P1729": {
            "title": "AllMusic album ID",
            "type": "External identifier"
        },
        "P1730": {
            "title": "AllMusic song ID",
            "type": "External identifier"
        },
        "P1731": {
            "title": "Fach",
            "type": "Item"
        },
        "P1732": {
            "title": "Naturbase ID",
            "type": "External identifier"
        },
        "P1733": {
            "title": "Steam Application ID",
            "type": "External identifier"
        },
        "P1734": {
            "title": "oath of office date",
            "type": "Point in time"
        },
        "P1735": {
            "title": "Comedien.ch ID",
            "type": "External identifier"
        },
        "P1736": {
            "title": "Information Center for Israeli Art artist ID",
            "type": "External identifier"
        },
        "P1738": {
            "title": "Merck Index monograph",
            "type": "External identifier"
        },
        "P1739": {
            "title": "CiNii book ID",
            "type": "External identifier"
        },
        "P1740": {
            "title": "category for films shot at this location",
            "type": "Item"
        },
        "P1741": {
            "title": "GTAA ID",
            "type": "External identifier"
        },
        "P1743": {
            "title": "Bradley and Fletcher checklist number",
            "type": "External identifier"
        },
        "P1744": {
            "title": "Agassiz checklist number",
            "type": "External identifier"
        },
        "P1745": {
            "title": "VASCAN ID",
            "type": "External identifier"
        },
        "P1746": {
            "title": "ZooBank nomenclatural act",
            "type": "External identifier"
        },
        "P1747": {
            "title": "Flora of China ID",
            "type": "External identifier"
        },
        "P1748": {
            "title": "NCI Thesaurus ID",
            "type": "String"
        },
        "P1749": {
            "title": "Parlement & Politiek ID",
            "type": "External identifier"
        },
        "P175": {
            "title": "performer",
            "type": "Item"
        },
        "P1750": {
            "title": "name day",
            "type": "Item"
        },
        "P1751": {
            "title": "Art UK collection ID",
            "type": "External identifier"
        },
        "P1752": {
            "title": "scale",
            "type": "Quantity"
        },
        "P1753": {
            "title": "list related to category",
            "type": "Item"
        },
        "P1754": {
            "title": "category related to list",
            "type": "Item"
        },
        "P1755": {
            "title": "Aviation Safety Network accident ID",
            "type": "External identifier"
        },
        "P176": {
            "title": "manufacturer",
            "type": "Item"
        },
        "P1760": {
            "title": "Aviation Safety Network Wikibase Occurrence",
            "type": "External identifier"
        },
        "P1761": {
            "title": "Watson & Dallwitz family ID",
            "type": "External identifier"
        },
        "P1762": {
            "title": "Hornbostel-Sachs classification",
            "type": "String"
        },
        "P1763": {
            "title": "National Pipe Organ Register ID",
            "type": "External identifier"
        },
        "P1764": {
            "title": "FOIH relict ID",
            "type": "External identifier"
        },
        "P1766": {
            "title": "place name sign",
            "type": "Commons media file"
        },
        "P1769": {
            "title": "denkXweb identifier",
            "type": "External identifier"
        },
        "P177": {
            "title": "crosses",
            "type": "Item"
        },
        "P1770": {
            "title": "Romania LMI code",
            "type": "External identifier"
        },
        "P1771": {
            "title": "Integrated Postsecondary Education Data System ID",
            "type": "External identifier"
        },
        "P1772": {
            "title": "USDA PLANTS ID",
            "type": "External identifier"
        },
        "P1773": {
            "title": "attributed to",
            "type": "Item"
        },
        "P1774": {
            "title": "workshop of",
            "type": "Item"
        },
        "P1775": {
            "title": "follower of",
            "type": "Item"
        },
        "P1776": {
            "title": "circle of",
            "type": "Item"
        },
        "P1777": {
            "title": "manner of",
            "type": "Item"
        },
        "P1778": {
            "title": "forgery after",
            "type": "Item"
        },
        "P1779": {
            "title": "possible creator",
            "type": "Item"
        },
        "P178": {
            "title": "developer",
            "type": "Item"
        },
        "P1780": {
            "title": "school of",
            "type": "Item"
        },
        "P1782": {
            "title": "courtesy name",
            "type": "String"
        },
        "P1785": {
            "title": "temple name",
            "type": "String"
        },
        "P1786": {
            "title": "posthumous name",
            "type": "String"
        },
        "P1787": {
            "title": "art-name",
            "type": "String"
        },
        "P1788": {
            "title": "DVN ID",
            "type": "External identifier"
        },
        "P1789": {
            "title": "chief operating officer",
            "type": "Item"
        },
        "P179": {
            "title": "series",
            "type": "Item"
        },
        "P1791": {
            "title": "category of people buried here",
            "type": "Item"
        },
        "P1792": {
            "title": "category of associated people",
            "type": "Item"
        },
        "P1793": {
            "title": "format as a regular expression",
            "type": "String"
        },
        "P1794": {
            "title": "bureau du patrimoine de Seine-Saint-Denis ID",
            "type": "External identifier"
        },
        "P1795": {
            "title": "Smithsonian American Art Museum: person/institution thesaurus ID",
            "type": "External identifier"
        },
        "P1796": {
            "title": "International Standard Industrial Classification code Rev.4",
            "type": "String"
        },
        "P1798": {
            "title": "ISO 639-5 code",
            "type": "External identifier"
        },
        "P18": {
            "title": "image",
            "type": "Commons media file"
        },
        "P180": {
            "title": "depicts",
            "type": "Item"
        },
        "P1800": {
            "title": "Wikimedia database name",
            "type": "External identifier"
        },
        "P1801": {
            "title": "commemorative plaque image",
            "type": "Commons media file"
        },
        "P1802": {
            "title": "EMLO person ID",
            "type": "External identifier"
        },
        "P1803": {
            "title": "Masaryk University person ID",
            "type": "External identifier"
        },
        "P1804": {
            "title": "DNF film ID",
            "type": "External identifier"
        },
        "P1806": {
            "title": "ABoK number",
            "type": "External identifier"
        },
        "P1807": {
            "title": "Great Aragonese Encyclopedia ID",
            "type": "External identifier"
        },
        "P1808": {
            "title": "senat.fr ID",
            "type": "External identifier"
        },
        "P1809": {
            "title": "choreographer",
            "type": "Item"
        },
        "P181": {
            "title": "taxon range map image",
            "type": "Commons media file"
        },
        "P1810": {
            "title": "named as",
            "type": "String"
        },
        "P1811": {
            "title": "list of episodes",
            "type": "Item"
        },
        "P1813": {
            "title": "short name",
            "type": "Monolingual text"
        },
        "P1814": {
            "title": "name in kana",
            "type": "String"
        },
        "P1815": {
            "title": "RSL scanned book's identifier",
            "type": "String"
        },
        "P1816": {
            "title": "National Portrait Gallery (London) person ID",
            "type": "External identifier"
        },
        "P1817": {
            "title": "addressee",
            "type": "Item"
        },
        "P1818": {
            "title": "Kaiserhof ID",
            "type": "External identifier"
        },
        "P1819": {
            "title": "genealogics.org person ID",
            "type": "External identifier"
        },
        "P1820": {
            "title": "Open Food Facts food additive id",
            "type": "String"
        },
        "P1821": {
            "title": "Open Food Facts food category ID",
            "type": "External identifier"
        },
        "P1822": {
            "title": "DSH object ID",
            "type": "External identifier"
        },
        "P1823": {
            "title": "BAnQ work ID",
            "type": "External identifier"
        },
        "P1824": {
            "title": "road number",
            "type": "String"
        },
        "P1825": {
            "title": "Baseball-Reference.com major league player ID",
            "type": "External identifier"
        },
        "P1826": {
            "title": "Baseball-Reference.com minor league player ID",
            "type": "External identifier"
        },
        "P1827": {
            "title": "ISWC",
            "type": "External identifier"
        },
        "P1828": {
            "title": "IPI name number",
            "type": "External identifier"
        },
        "P1829": {
            "title": "Roud Folk Song Index number",
            "type": "External identifier"
        },
        "P183": {
            "title": "endemic to",
            "type": "Item"
        },
        "P1830": {
            "title": "owner of",
            "type": "Item"
        },
        "P1831": {
            "title": "electorate",
            "type": "Quantity"
        },
        "P1832": {
            "title": "GrassBase ID",
            "type": "External identifier"
        },
        "P1833": {
            "title": "number of registered users/contributors",
            "type": "Quantity"
        },
        "P1836": {
            "title": "draft pick number",
            "type": "String"
        },
        "P1837": {
            "title": "Gaoloumi ID",
            "type": "External identifier"
        },
        "P1838": {
            "title": "PSS-archi ID",
            "type": "External identifier"
        },
        "P1839": {
            "title": "US Federal Election Commission ID",
            "type": "External identifier"
        },
        "P184": {
            "title": "doctoral advisor",
            "type": "Item"
        },
        "P1840": {
            "title": "investigated by",
            "type": "Item"
        },
        "P1841": {
            "title": "Swedish district code",
            "type": "External identifier"
        },
        "P1842": {
            "title": "Global Anabaptist Mennonite Encyclopedia Online ID",
            "type": "External identifier"
        },
        "P1843": {
            "title": "taxon common name",
            "type": "Monolingual text"
        },
        "P1844": {
            "title": "HathiTrust ID",
            "type": "External identifier"
        },
        "P1845": {
            "title": "anti-virus alias",
            "type": "String"
        },
        "P1846": {
            "title": "distribution map",
            "type": "Commons media file"
        },
        "P1847": {
            "title": "Nasjonalbiblioteket photographer ID",
            "type": "External identifier"
        },
        "P1848": {
            "title": "protected areas INPN Code",
            "type": "External identifier"
        },
        "P1849": {
            "title": "SSR WrittenForm ID",
            "type": "External identifier"
        },
        "P185": {
            "title": "doctoral student",
            "type": "Item"
        },
        "P1850": {
            "title": "SSR place name number",
            "type": "External identifier"
        },
        "P1851": {
            "title": "input set",
            "type": "Item"
        },
        "P1852": {
            "title": "Perry Index",
            "type": "External identifier"
        },
        "P1853": {
            "title": "blood type",
            "type": "Item"
        },
        "P1854": {
            "title": "Kiev street code",
            "type": "External identifier"
        },
        "P1855": {
            "title": "Wikidata property example",
            "type": "Item"
        },
        "P186": {
            "title": "material used",
            "type": "Item"
        },
        "P1866": {
            "title": "Catholic Hierarchy diocese ID",
            "type": "External identifier"
        },
        "P1867": {
            "title": "eligible voters",
            "type": "Quantity"
        },
        "P1868": {
            "title": "ballots cast",
            "type": "Quantity"
        },
        "P1869": {
            "title": "Hall of Valor ID",
            "type": "External identifier"
        },
        "P1870": {
            "title": "Name Assigning Authority Number",
            "type": "External identifier"
        },
        "P1871": {
            "title": "CERL ID",
            "type": "External identifier"
        },
        "P1872": {
            "title": "minimum number of players",
            "type": "Quantity"
        },
        "P1873": {
            "title": "maximum number of players",
            "type": "Quantity"
        },
        "P1874": {
            "title": "Netflix ID",
            "type": "External identifier"
        },
        "P1875": {
            "title": "represented by",
            "type": "Item"
        },
        "P1876": {
            "title": "vessel",
            "type": "Item"
        },
        "P1877": {
            "title": "after a work by",
            "type": "Item"
        },
        "P1878": {
            "title": "Vox-ATypI classification",
            "type": "Item"
        },
        "P1879": {
            "title": "income classification (Philippines)",
            "type": "Item"
        },
        "P1880": {
            "title": "measured by",
            "type": "Item"
        },
        "P1881": {
            "title": "list of characters",
            "type": "Item"
        },
        "P1882": {
            "title": "Web Gallery of Art ID",
            "type": "External identifier"
        },
        "P1883": {
            "title": "Declarator.org ID",
            "type": "External identifier"
        },
        "P1884": {
            "title": "hair color",
            "type": "Item"
        },
        "P1885": {
            "title": "cathedral",
            "type": "Item"
        },
        "P1886": {
            "title": "Smithsonian volcano ID",
            "type": "External identifier"
        },
        "P1887": {
            "title": "vice-county",
            "type": "Item"
        },
        "P1888": {
            "title": "Dictionary of Medieval Names from European Sources entry",
            "type": "External identifier"
        },
        "P1889": {
            "title": "different from",
            "type": "Item"
        },
        "P189": {
            "title": "location of discovery",
            "type": "Item"
        },
        "P1890": {
            "title": "BNC ID",
            "type": "External identifier"
        },
        "P1891": {
            "title": "signatory",
            "type": "Item"
        },
        "P1893": {
            "title": "OpenPlaques plaque ID",
            "type": "External identifier"
        },
        "P1894": {
            "title": "Danish urban area code",
            "type": "External identifier"
        },
        "P1895": {
            "title": "Fauna Europaea ID",
            "type": "External identifier"
        },
        "P1896": {
            "title": "source website for the property",
            "type": "URL"
        },
        "P1897": {
            "title": "highest note",
            "type": "Item"
        },
        "P1898": {
            "title": "lowest note",
            "type": "Item"
        },
        "P1899": {
            "title": "LibriVox author ID",
            "type": "External identifier"
        },
        "P19": {
            "title": "place of birth",
            "type": "Item"
        },
        "P190": {
            "title": "sister city",
            "type": "Item"
        },
        "P1900": {
            "title": "EAGLE id",
            "type": "External identifier"
        },
        "P1901": {
            "title": "BALaT person/organisation id",
            "type": "External identifier"
        },
        "P1902": {
            "title": "Spotify artist ID",
            "type": "External identifier"
        },
        "P1903": {
            "title": "volcanic explosivity index",
            "type": "Item"
        },
        "P1906": {
            "title": "office held by head of state",
            "type": "Item"
        },
        "P1907": {
            "title": "Australian Dictionary of Biography ID",
            "type": "External identifier"
        },
        "P1908": {
            "title": "CWGC person ID",
            "type": "External identifier"
        },
        "P1909": {
            "title": "side effect",
            "type": "Item"
        },
        "P1910": {
            "title": "decreased expression in",
            "type": "Item"
        },
        "P1911": {
            "title": "increased expression in",
            "type": "Item"
        },
        "P1912": {
            "title": "deletion association with",
            "type": "Item"
        },
        "P1913": {
            "title": "gene duplication association with",
            "type": "Item"
        },
        "P1914": {
            "title": "gene insertion association with",
            "type": "Item"
        },
        "P1915": {
            "title": "gene inversion association with",
            "type": "Item"
        },
        "P1916": {
            "title": "gene substitution association with",
            "type": "Item"
        },
        "P1917": {
            "title": "posttranslational modification association with",
            "type": "Item"
        },
        "P1918": {
            "title": "altered regulation leads to",
            "type": "Item"
        },
        "P1919": {
            "title": "Ministry of Education of Chile school ID",
            "type": "External identifier"
        },
        "P1920": {
            "title": "CWGC burial ground ID",
            "type": "External identifier"
        },
        "P1921": {
            "title": "formatter URI for RDF resource",
            "type": "String"
        },
        "P1922": {
            "title": "first line",
            "type": "Monolingual text"
        },
        "P1923": {
            "title": "participating teams",
            "type": "Item"
        },
        "P1924": {
            "title": "vaccine for",
            "type": "Item"
        },
        "P1925": {
            "title": "VIOLIN ID",
            "type": "External identifier"
        },
        "P1928": {
            "title": "Vaccine Ontology ID",
            "type": "External identifier"
        },
        "P1929": {
            "title": "ClinVar Variation ID",
            "type": "External identifier"
        },
        "P193": {
            "title": "main building contractor",
            "type": "Item"
        },
        "P1930": {
            "title": "DSM-5",
            "type": "External identifier"
        },
        "P1931": {
            "title": "NIOSH Pocket Guide ID",
            "type": "String"
        },
        "P1932": {
            "title": "stated as",
            "type": "String"
        },
        "P1933": {
            "title": "MobyGames ID",
            "type": "External identifier"
        },
        "P1934": {
            "title": "Animator.ru film ID",
            "type": "External identifier"
        },
        "P1935": {
            "title": "Database of Classical Scholars ID",
            "type": "External identifier"
        },
        "P1936": {
            "title": "Digital Atlas of the Roman Empire ID",
            "type": "External identifier"
        },
        "P1937": {
            "title": "UN/LOCODE",
            "type": "External identifier"
        },
        "P1938": {
            "title": "Project Gutenberg author ID",
            "type": "External identifier"
        },
        "P1939": {
            "title": "Dyntaxa ID",
            "type": "External identifier"
        },
        "P194": {
            "title": "legislative body",
            "type": "Item"
        },
        "P1940": {
            "title": "conifers.org ID",
            "type": "External identifier"
        },
        "P1942": {
            "title": "McCune-Reischauer romanization",
            "type": "String"
        },
        "P1943": {
            "title": "location map",
            "type": "Commons media file"
        },
        "P1944": {
            "title": "relief location map",
            "type": "Commons media file"
        },
        "P1945": {
            "title": "street key",
            "type": "String"
        },
        "P1946": {
            "title": "National Library of Ireland authority ID",
            "type": "External identifier"
        },
        "P1947": {
            "title": "Mapillary ID",
            "type": "External identifier"
        },
        "P1948": {
            "title": "BerlPap identifier",
            "type": "External identifier"
        },
        "P1949": {
            "title": "CulturaItalia ID",
            "type": "External identifier"
        },
        "P195": {
            "title": "collection",
            "type": "Item"
        },
        "P1950": {
            "title": "second family name in Spanish name",
            "type": "Item"
        },
        "P1951": {
            "title": "investor",
            "type": "Item"
        },
        "P1952": {
            "title": "Encyclopaedia Metallum band ID",
            "type": "External identifier"
        },
        "P1953": {
            "title": "Discogs artist ID",
            "type": "External identifier"
        },
        "P1954": {
            "title": "Discogs master ID",
            "type": "External identifier"
        },
        "P1955": {
            "title": "Discogs label ID",
            "type": "External identifier"
        },
        "P1956": {
            "title": "takeoff and landing capability",
            "type": "Item"
        },
        "P1957": {
            "title": "Wikisource index page",
            "type": "URL"
        },
        "P1958": {
            "title": "Trismegistos Geo ID",
            "type": "External identifier"
        },
        "P1959": {
            "title": "Dutch Senate person ID",
            "type": "External identifier"
        },
        "P196": {
            "title": "minor planet group",
            "type": "Item"
        },
        "P1960": {
            "title": "Google Scholar author ID",
            "type": "External identifier"
        },
        "P1961": {
            "title": "CTHS society ID",
            "type": "External identifier"
        },
        "P1962": {
            "title": "patron",
            "type": "Item"
        },
        "P1963": {
            "title": "properties for this type",
            "type": "Property"
        },
        "P1966": {
            "title": "Biblioteca Nacional de Chile catalogue number",
            "type": "External identifier"
        },
        "P1967": {
            "title": "BoxRec ID",
            "type": "External identifier"
        },
        "P1968": {
            "title": "Foursquare venue ID",
            "type": "External identifier"
        },
        "P1969": {
            "title": "MovieMeter director ID",
            "type": "External identifier"
        },
        "P197": {
            "title": "adjacent station",
            "type": "Item"
        },
        "P1970": {
            "title": "MovieMeter Movie ID",
            "type": "External identifier"
        },
        "P1971": {
            "title": "number of children",
            "type": "Quantity"
        },
        "P1972": {
            "title": "Open Hub ID",
            "type": "External identifier"
        },
        "P1973": {
            "title": "RSL editions",
            "type": "External identifier"
        },
        "P1976": {
            "title": "INEGI locality ID",
            "type": "External identifier"
        },
        "P1977": {
            "title": "Les Archives du Spectacle Person ID",
            "type": "External identifier"
        },
        "P1978": {
            "title": "USDA NDB number",
            "type": "External identifier"
        },
        "P1979": {
            "title": "Righteous Among The Nations ID",
            "type": "External identifier"
        },
        "P1980": {
            "title": "PolSys ID",
            "type": "External identifier"
        },
        "P1981": {
            "title": "FSK film rating",
            "type": "Item"
        },
        "P1982": {
            "title": "Anime News Network person ID",
            "type": "External identifier"
        },
        "P1983": {
            "title": "Anime News Network company ID",
            "type": "External identifier"
        },
        "P1984": {
            "title": "Anime News Network manga ID",
            "type": "External identifier"
        },
        "P1985": {
            "title": "Anime News Network anime ID",
            "type": "External identifier"
        },
        "P1986": {
            "title": "Dizionario Biografico degli Italiani",
            "type": "External identifier"
        },
        "P1987": {
            "title": "MCN code",
            "type": "String"
        },
        "P1988": {
            "title": "Delarge ID",
            "type": "External identifier"
        },
        "P1989": {
            "title": "Encyclopaedia Metallum artist ID",
            "type": "External identifier"
        },
        "P199": {
            "title": "business division",
            "type": "Item"
        },
        "P1990": {
            "title": "species kept",
            "type": "Item"
        },
        "P1991": {
            "title": "LPSN URL",
            "type": "URL"
        },
        "P1992": {
            "title": "Plazi ID",
            "type": "External identifier"
        },
        "P1993": {
            "title": "TeX string",
            "type": "String"
        },
        "P1994": {
            "title": "AllMusic composition ID",
            "type": "External identifier"
        },
        "P1995": {
            "title": "health specialty",
            "type": "Item"
        },
        "P1996": {
            "title": "parliament.uk ID",
            "type": "External identifier"
        },
        "P1997": {
            "title": "Facebook Places ID",
            "type": "External identifier"
        },
        "P1998": {
            "title": "UCI code",
            "type": "String"
        },
        "P1999": {
            "title": "UNESCO language status",
            "type": "Item"
        },
        "P20": {
            "title": "place of death",
            "type": "Item"
        },
        "P200": {
            "title": "lake inflows",
            "type": "Item"
        },
        "P2000": {
            "title": "CPDL ID",
            "type": "String"
        },
        "P2001": {
            "title": "Revised Romanization (Korean)",
            "type": "String"
        },
        "P2002": {
            "title": "Twitter username",
            "type": "External identifier"
        },
        "P2003": {
            "title": "Instagram username",
            "type": "External identifier"
        },
        "P2004": {
            "title": "NALT ID",
            "type": "External identifier"
        },
        "P2005": {
            "title": "Catalogus Professorum Halensis",
            "type": "External identifier"
        },
        "P2006": {
            "title": "ZooBank author ID",
            "type": "External identifier"
        },
        "P2007": {
            "title": "ZooBank publication ID",
            "type": "External identifier"
        },
        "P2008": {
            "title": "IPNI publication ID",
            "type": "External identifier"
        },
        "P2009": {
            "title": "Exif model",
            "type": "String"
        },
        "P201": {
            "title": "lake outflow",
            "type": "Item"
        },
        "P2010": {
            "title": "Exif make",
            "type": "String"
        },
        "P2011": {
            "title": "Cooper-Hewitt Person ID",
            "type": "External identifier"
        },
        "P2012": {
            "title": "cuisine",
            "type": "Item"
        },
        "P2013": {
            "title": "Facebook profile ID",
            "type": "External identifier"
        },
        "P2014": {
            "title": "MoMA artwork id",
            "type": "External identifier"
        },
        "P2015": {
            "title": "Hansard (1803\u20132005) ID",
            "type": "External identifier"
        },
        "P2016": {
            "title": "Catalogus Professorum Academiae Groninganae id",
            "type": "External identifier"
        },
        "P2017": {
            "title": "isomeric SMILES",
            "type": "String"
        },
        "P2018": {
            "title": "Teuchos ID",
            "type": "External identifier"
        },
        "P2019": {
            "title": "AllMovie artist ID",
            "type": "External identifier"
        },
        "P2020": {
            "title": "WorldFootball.net ID",
            "type": "External identifier"
        },
        "P2021": {
            "title": "Erd\u0151s number",
            "type": "Quantity"
        },
        "P2024": {
            "title": "German cattle breed ID",
            "type": "External identifier"
        },
        "P2025": {
            "title": "Find A Grave cemetery ID",
            "type": "External identifier"
        },
        "P2026": {
            "title": "Avibase ID",
            "type": "External identifier"
        },
        "P2027": {
            "title": "Colour Index International constitution ID",
            "type": "External identifier"
        },
        "P2028": {
            "title": "United States Armed Forces service number",
            "type": "External identifier"
        },
        "P2029": {
            "title": "Dictionary of Ulster Biography ID",
            "type": "External identifier"
        },
        "P2030": {
            "title": "NASA biographical ID",
            "type": "External identifier"
        },
        "P2031": {
            "title": "work period (start)",
            "type": "Point in time"
        },
        "P2032": {
            "title": "work period (end)",
            "type": "Point in time"
        },
        "P2033": {
            "title": "Category for pictures taken with camera",
            "type": "Item"
        },
        "P2034": {
            "title": "Project Gutenberg ebook ID",
            "type": "External identifier"
        },
        "P2035": {
            "title": "LinkedIn personal profile URL",
            "type": "URL"
        },
        "P2036": {
            "title": "African Plant Database ID",
            "type": "External identifier"
        },
        "P2037": {
            "title": "GitHub username",
            "type": "External identifier"
        },
        "P2038": {
            "title": "ResearchGate person ID",
            "type": "External identifier"
        },
        "P2040": {
            "title": "CITES Species+ ID",
            "type": "External identifier"
        },
        "P2041": {
            "title": "National Gallery of Victoria artist ID",
            "type": "External identifier"
        },
        "P2042": {
            "title": "Artsy artist ID",
            "type": "External identifier"
        },
        "P2043": {
            "title": "length",
            "type": "Quantity"
        },
        "P2044": {
            "title": "elevation above sea level",
            "type": "Quantity"
        },
        "P2045": {
            "title": "orbital inclination",
            "type": "Quantity"
        },
        "P2046": {
            "title": "area",
            "type": "Quantity"
        },
        "P2047": {
            "title": "duration",
            "type": "Quantity"
        },
        "P2048": {
            "title": "height",
            "type": "Quantity"
        },
        "P2049": {
            "title": "width",
            "type": "Quantity"
        },
        "P205": {
            "title": "basin country",
            "type": "Item"
        },
        "P2050": {
            "title": "wingspan",
            "type": "Quantity"
        },
        "P2051": {
            "title": "M sin i",
            "type": "Quantity"
        },
        "P2052": {
            "title": "speed",
            "type": "Quantity"
        },
        "P2053": {
            "title": "watershed area",
            "type": "Quantity"
        },
        "P2054": {
            "title": "density",
            "type": "Quantity"
        },
        "P2055": {
            "title": "electrical conductivity",
            "type": "Quantity"
        },
        "P2056": {
            "title": "heat capacity",
            "type": "Quantity"
        },
        "P2057": {
            "title": "HMDB ID",
            "type": "External identifier"
        },
        "P2058": {
            "title": "depositor",
            "type": "Item"
        },
        "P206": {
            "title": "located in or next to body of water",
            "type": "Item"
        },
        "P2060": {
            "title": "luminosity",
            "type": "Quantity"
        },
        "P2061": {
            "title": "aspect ratio",
            "type": "Item"
        },
        "P2062": {
            "title": "HSDB ID",
            "type": "External identifier"
        },
        "P2063": {
            "title": "LIPID MAPS ID",
            "type": "External identifier"
        },
        "P2064": {
            "title": "KNApSAcK ID",
            "type": "External identifier"
        },
        "P2065": {
            "title": "NIAID ChemDB ID",
            "type": "External identifier"
        },
        "P2066": {
            "title": "fusion enthalpy",
            "type": "Quantity"
        },
        "P2067": {
            "title": "mass",
            "type": "Quantity"
        },
        "P2068": {
            "title": "thermal conductivity",
            "type": "Quantity"
        },
        "P2069": {
            "title": "magnetic moment",
            "type": "Quantity"
        },
        "P207": {
            "title": "bathymetry image",
            "type": "Commons media file"
        },
        "P2070": {
            "title": "Fellow of the Royal Society ID",
            "type": "External identifier"
        },
        "P2071": {
            "title": "M\u00e9moire des hommes ID",
            "type": "External identifier"
        },
        "P2072": {
            "title": "CDB Chemical ID",
            "type": "External identifier"
        },
        "P2073": {
            "title": "vehicle range",
            "type": "Quantity"
        },
        "P2074": {
            "title": "internetmedicin.se ID",
            "type": "External identifier"
        },
        "P2075": {
            "title": "speed of sound",
            "type": "Quantity"
        },
        "P2076": {
            "title": "temperature",
            "type": "Quantity"
        },
        "P2077": {
            "title": "pressure",
            "type": "Quantity"
        },
        "P2078": {
            "title": "user manual link",
            "type": "URL"
        },
        "P2079": {
            "title": "fabrication method",
            "type": "Item"
        },
        "P208": {
            "title": "executive body",
            "type": "Item"
        },
        "P2080": {
            "title": "AcademiaNet ID",
            "type": "External identifier"
        },
        "P2081": {
            "title": "BLDAM object ID",
            "type": "External identifier"
        },
        "P2082": {
            "title": "M.49 code",
            "type": "External identifier"
        },
        "P2083": {
            "title": "Leadscope ID",
            "type": "External identifier"
        },
        "P2084": {
            "title": "ZINC ID",
            "type": "External identifier"
        },
        "P2085": {
            "title": "Nikkaji ID",
            "type": "External identifier"
        },
        "P2086": {
            "title": "CDD Public ID",
            "type": "External identifier"
        },
        "P2087": {
            "title": "Crunchbase person ID",
            "type": "External identifier"
        },
        "P2088": {
            "title": "Crunchbase organisation ID",
            "type": "External identifier"
        },
        "P2089": {
            "title": "Library of Congress JukeBox ID",
            "type": "External identifier"
        },
        "P209": {
            "title": "highest judicial authority",
            "type": "Item"
        },
        "P2090": {
            "title": "Power of 10 athlete ID",
            "type": "External identifier"
        },
        "P2091": {
            "title": "FISA rower ID",
            "type": "External identifier"
        },
        "P2092": {
            "title": "Bildindex der Kunst und Architektur ID",
            "type": "External identifier"
        },
        "P2093": {
            "title": "author name string",
            "type": "String"
        },
        "P2094": {
            "title": "competition class",
            "type": "Item"
        },
        "P2095": {
            "title": "co-driver",
            "type": "Item"
        },
        "P2096": {
            "title": "media legend",
            "type": "Monolingual text"
        },
        "P2097": {
            "title": "term length of office",
            "type": "Quantity"
        },
        "P2098": {
            "title": "substitute/deputy/replacement of office/officeholder",
            "type": "Item"
        },
        "P2099": {
            "title": "BC Geographical Names ID",
            "type": "External identifier"
        },
        "P21": {
            "title": "sex or gender",
            "type": "Item"
        },
        "P210": {
            "title": "party chief representative",
            "type": "Item"
        },
        "P2100": {
            "title": "Banque de noms de lieux du Qu\u00e9bec ID",
            "type": "External identifier"
        },
        "P2101": {
            "title": "melting point",
            "type": "Quantity"
        },
        "P2102": {
            "title": "boiling point",
            "type": "Quantity"
        },
        "P2103": {
            "title": "size of team at start",
            "type": "Quantity"
        },
        "P2105": {
            "title": "size of team at finish",
            "type": "Quantity"
        },
        "P2106": {
            "title": "RXNO Ontology",
            "type": "External identifier"
        },
        "P2107": {
            "title": "decomposition point",
            "type": "Quantity"
        },
        "P2108": {
            "title": "Kunstindeks Danmark artwork ID",
            "type": "External identifier"
        },
        "P2109": {
            "title": "installed capacity",
            "type": "Quantity"
        },
        "P2112": {
            "title": "wing area",
            "type": "Quantity"
        },
        "P2113": {
            "title": "sublimation temperature",
            "type": "Quantity"
        },
        "P2114": {
            "title": "half-life",
            "type": "Quantity"
        },
        "P2115": {
            "title": "NDF-RT ID",
            "type": "External identifier"
        },
        "P2116": {
            "title": "enthalpy of vaporization",
            "type": "Quantity"
        },
        "P2117": {
            "title": "combustion enthalpy",
            "type": "Quantity"
        },
        "P2118": {
            "title": "kinematic viscosity",
            "type": "Quantity"
        },
        "P2119": {
            "title": "vapor pressure",
            "type": "Quantity"
        },
        "P212": {
            "title": "ISBN-13",
            "type": "External identifier"
        },
        "P2120": {
            "title": "radius",
            "type": "Quantity"
        },
        "P2121": {
            "title": "prize money",
            "type": "Quantity"
        },
        "P2123": {
            "title": "YerelNet village ID",
            "type": "External identifier"
        },
        "P2124": {
            "title": "member count",
            "type": "Quantity"
        },
        "P2125": {
            "title": "Revised Hepburn romanization",
            "type": "String"
        },
        "P2126": {
            "title": "Georgian national system of romanization",
            "type": "String"
        },
        "P2127": {
            "title": "International Nuclear Event Scale",
            "type": "Item"
        },
        "P2128": {
            "title": "flash point",
            "type": "Quantity"
        },
        "P2129": {
            "title": "IDLH",
            "type": "Quantity"
        },
        "P213": {
            "title": "ISNI",
            "type": "External identifier"
        },
        "P2130": {
            "title": "cost",
            "type": "Quantity"
        },
        "P2131": {
            "title": "nominal GDP",
            "type": "Quantity"
        },
        "P2132": {
            "title": "nominal GDP per capita",
            "type": "Quantity"
        },
        "P2133": {
            "title": "total debt",
            "type": "Quantity"
        },
        "P2134": {
            "title": "total reserves",
            "type": "Quantity"
        },
        "P2135": {
            "title": "total exports",
            "type": "Quantity"
        },
        "P2136": {
            "title": "total imports",
            "type": "Quantity"
        },
        "P2137": {
            "title": "total equity",
            "type": "Quantity"
        },
        "P2138": {
            "title": "total liabilities",
            "type": "Quantity"
        },
        "P2139": {
            "title": "total revenue",
            "type": "Quantity"
        },
        "P214": {
            "title": "VIAF ID",
            "type": "External identifier"
        },
        "P2140": {
            "title": "foreign direct investment net outflow",
            "type": "Quantity"
        },
        "P2141": {
            "title": "foreign direct investment net inflow",
            "type": "Quantity"
        },
        "P2142": {
            "title": "box office",
            "type": "Quantity"
        },
        "P2143": {
            "title": "genome size",
            "type": "Quantity"
        },
        "P2144": {
            "title": "frequency",
            "type": "Quantity"
        },
        "P2145": {
            "title": "explosive energy equivalent",
            "type": "Quantity"
        },
        "P2146": {
            "title": "orbital period",
            "type": "Quantity"
        },
        "P2147": {
            "title": "rotation period",
            "type": "Quantity"
        },
        "P2148": {
            "title": "distance from river mouth",
            "type": "Quantity"
        },
        "P2149": {
            "title": "clock speed",
            "type": "Quantity"
        },
        "P215": {
            "title": "spectral class",
            "type": "String"
        },
        "P2150": {
            "title": "FSB speed",
            "type": "Quantity"
        },
        "P2151": {
            "title": "focal length",
            "type": "Quantity"
        },
        "P2152": {
            "title": "antiparticle",
            "type": "Item"
        },
        "P2153": {
            "title": "PubChem Substance ID (SID)",
            "type": "External identifier"
        },
        "P2154": {
            "title": "binding energy",
            "type": "Quantity"
        },
        "P2155": {
            "title": "solid solution series with",
            "type": "Item"
        },
        "P2156": {
            "title": "pseudo crystal habit",
            "type": "Item"
        },
        "P2157": {
            "title": "lithography",
            "type": "Item"
        },
        "P2158": {
            "title": "Cell line ontology ID",
            "type": "External identifier"
        },
        "P2159": {
            "title": "solves",
            "type": "Item"
        },
        "P2160": {
            "title": "mass excess",
            "type": "Quantity"
        },
        "P2161": {
            "title": "Guthrie code",
            "type": "External identifier"
        },
        "P2162": {
            "title": "Deutsche Ultramarathon-Vereinigung ID",
            "type": "External identifier"
        },
        "P2163": {
            "title": "FAST ID",
            "type": "External identifier"
        },
        "P2164": {
            "title": "SIGIC author ID",
            "type": "External identifier"
        },
        "P2165": {
            "title": "SIGIC group ID",
            "type": "External identifier"
        },
        "P2166": {
            "title": "SIGIC institution ID",
            "type": "External identifier"
        },
        "P2167": {
            "title": "UNSPSC Code",
            "type": "External identifier"
        },
        "P2168": {
            "title": "SFDb person ID",
            "type": "External identifier"
        },
        "P2169": {
            "title": "PublicWhip ID",
            "type": "External identifier"
        },
        "P217": {
            "title": "inventory number",
            "type": "String"
        },
        "P2170": {
            "title": "Hansard (2006\u2013March 2016) ID",
            "type": "External identifier"
        },
        "P2171": {
            "title": "They Work for You ID",
            "type": "External identifier"
        },
        "P2172": {
            "title": "Parliamentary record identifier",
            "type": "External identifier"
        },
        "P2173": {
            "title": "BBC News Democracy Live ID",
            "type": "External identifier"
        },
        "P2174": {
            "title": "MoMA artist id",
            "type": "External identifier"
        },
        "P2175": {
            "title": "medical condition treated",
            "type": "Item"
        },
        "P2176": {
            "title": "drug used for treatment",
            "type": "Item"
        },
        "P2178": {
            "title": "solvent",
            "type": "Item"
        },
        "P2179": {
            "title": "ACM Classification Code (2012)",
            "type": "String"
        },
        "P218": {
            "title": "ISO 639-1 code",
            "type": "External identifier"
        },
        "P2180": {
            "title": "Kansallisbiografia ID",
            "type": "External identifier"
        },
        "P2181": {
            "title": "Finnish MP ID",
            "type": "External identifier"
        },
        "P2182": {
            "title": "Finnish Ministers database ID",
            "type": "External identifier"
        },
        "P2183": {
            "title": "ISO 9:1995",
            "type": "String"
        },
        "P2184": {
            "title": "history of topic",
            "type": "Item"
        },
        "P2185": {
            "title": "DLI ID",
            "type": "External identifier"
        },
        "P2186": {
            "title": "Wiki Loves Monuments ID",
            "type": "External identifier"
        },
        "P2187": {
            "title": "BiblioNet publication ID",
            "type": "External identifier"
        },
        "P2188": {
            "title": "BiblioNet author ID",
            "type": "External identifier"
        },
        "P2189": {
            "title": "BiblioNet publisher ID",
            "type": "External identifier"
        },
        "P219": {
            "title": "ISO 639-2 code",
            "type": "External identifier"
        },
        "P2190": {
            "title": "C-SPAN person ID",
            "type": "External identifier"
        },
        "P2191": {
            "title": "NILF author id",
            "type": "External identifier"
        },
        "P2192": {
            "title": "endangeredlanguages.com ID",
            "type": "External identifier"
        },
        "P2193": {
            "title": "Soccerbase player ID",
            "type": "External identifier"
        },
        "P2194": {
            "title": "PSS-Archi architect id",
            "type": "External identifier"
        },
        "P2195": {
            "title": "Soccerbase manager ID",
            "type": "External identifier"
        },
        "P2196": {
            "title": "students count",
            "type": "Quantity"
        },
        "P2197": {
            "title": "production rate",
            "type": "Quantity"
        },
        "P2198": {
            "title": "average gradient",
            "type": "Quantity"
        },
        "P2199": {
            "title": "autoignition temperature",
            "type": "Quantity"
        },
        "P22": {
            "title": "father",
            "type": "Item"
        },
        "P220": {
            "title": "ISO 639-3 code",
            "type": "External identifier"
        },
        "P2200": {
            "title": "electric charge",
            "type": "Quantity"
        },
        "P2201": {
            "title": "electric dipole moment",
            "type": "Quantity"
        },
        "P2202": {
            "title": "lower flammable limit",
            "type": "Quantity"
        },
        "P2203": {
            "title": "upper flammable limit",
            "type": "Quantity"
        },
        "P2204": {
            "title": "minimum explosive concentration",
            "type": "Quantity"
        },
        "P2205": {
            "title": "Spotify album ID",
            "type": "External identifier"
        },
        "P2206": {
            "title": "Discogs release ID",
            "type": "External identifier"
        },
        "P2207": {
            "title": "Spotify track ID",
            "type": "External identifier"
        },
        "P2208": {
            "title": "average shot length",
            "type": "Quantity"
        },
        "P2209": {
            "title": "SourceForge project",
            "type": "External identifier"
        },
        "P2210": {
            "title": "relative to",
            "type": "Item"
        },
        "P2211": {
            "title": "position angle",
            "type": "Quantity"
        },
        "P2212": {
            "title": "angular distance",
            "type": "Quantity"
        },
        "P2213": {
            "title": "longitude of ascending node",
            "type": "Quantity"
        },
        "P2214": {
            "title": "parallax",
            "type": "Quantity"
        },
        "P2215": {
            "title": "proper motion",
            "type": "Quantity"
        },
        "P2216": {
            "title": "radial velocity",
            "type": "Quantity"
        },
        "P2217": {
            "title": "cruise speed",
            "type": "Quantity"
        },
        "P2218": {
            "title": "net worth estimate",
            "type": "Quantity"
        },
        "P2219": {
            "title": "real gross domestic product growth rate",
            "type": "Quantity"
        },
        "P2220": {
            "title": "household wealth",
            "type": "Quantity"
        },
        "P2221": {
            "title": "flux",
            "type": "Quantity"
        },
        "P2222": {
            "title": "gyromagnetic ratio",
            "type": "Quantity"
        },
        "P2223": {
            "title": "decay width",
            "type": "Quantity"
        },
        "P2224": {
            "title": "spectral line",
            "type": "Quantity"
        },
        "P2225": {
            "title": "discharge",
            "type": "Quantity"
        },
        "P2226": {
            "title": "market capitalization",
            "type": "Quantity"
        },
        "P2227": {
            "title": "metallicity",
            "type": "Quantity"
        },
        "P2228": {
            "title": "maximum thrust",
            "type": "Quantity"
        },
        "P2229": {
            "title": "thermal design power",
            "type": "Quantity"
        },
        "P223": {
            "title": "galaxy morphological type",
            "type": "String"
        },
        "P2230": {
            "title": "torque",
            "type": "Quantity"
        },
        "P2231": {
            "title": "explosive velocity",
            "type": "Quantity"
        },
        "P2232": {
            "title": "cash",
            "type": "Quantity"
        },
        "P2233": {
            "title": "semi-major axis",
            "type": "Quantity"
        },
        "P2234": {
            "title": "volume as quantity",
            "type": "Quantity"
        },
        "P2235": {
            "title": "external superproperty",
            "type": "URL"
        },
        "P2236": {
            "title": "external subproperty",
            "type": "URL"
        },
        "P2237": {
            "title": "units used for this property",
            "type": "Item"
        },
        "P2238": {
            "title": "official symbol",
            "type": "Item"
        },
        "P2239": {
            "title": "first aid measures",
            "type": "Item"
        },
        "P2240": {
            "title": "median lethal dose",
            "type": "Quantity"
        },
        "P2241": {
            "title": "reason for deprecation",
            "type": "Item"
        },
        "P2242": {
            "title": "Florentine musea catalogue ID",
            "type": "External identifier"
        },
        "P2243": {
            "title": "apoapsis",
            "type": "Quantity"
        },
        "P2244": {
            "title": "periapsis",
            "type": "Quantity"
        },
        "P2248": {
            "title": "argument of periapsis",
            "type": "Quantity"
        },
        "P2249": {
            "title": "Refseq Genome ID",
            "type": "External identifier"
        },
        "P225": {
            "title": "taxon name",
            "type": "String"
        },
        "P2250": {
            "title": "life expectancy",
            "type": "Quantity"
        },
        "P2252": {
            "title": "National Gallery of Art artist ID",
            "type": "External identifier"
        },
        "P2253": {
            "title": "DfE URN",
            "type": "External identifier"
        },
        "P2254": {
            "title": "maximum operating altitude",
            "type": "Quantity"
        },
        "P2255": {
            "title": "Debrett's People of Today ID",
            "type": "External identifier"
        },
        "P2257": {
            "title": "frequency of event",
            "type": "Quantity"
        },
        "P2258": {
            "title": "mobile country code",
            "type": "String"
        },
        "P2259": {
            "title": "mobile network code",
            "type": "String"
        },
        "P2260": {
            "title": "ionization energy",
            "type": "Quantity"
        },
        "P2261": {
            "title": "beam",
            "type": "Quantity"
        },
        "P2262": {
            "title": "draft",
            "type": "Quantity"
        },
        "P2263": {
            "title": "ISOCAT id",
            "type": "String"
        },
        "P2264": {
            "title": "mix'n'match catalogue ID",
            "type": "External identifier"
        },
        "P2266": {
            "title": "Fashion Model Directory model ID",
            "type": "External identifier"
        },
        "P2267": {
            "title": "PolitiFact Personality ID",
            "type": "External identifier"
        },
        "P2268": {
            "title": "Mus\u00e9e d'Orsay artist ID",
            "type": "External identifier"
        },
        "P227": {
            "title": "GND ID",
            "type": "External identifier"
        },
        "P2270": {
            "title": "Emporis building complex ID",
            "type": "External identifier"
        },
        "P2271": {
            "title": "Wikidata property example for properties",
            "type": "Property"
        },
        "P2272": {
            "title": "Hederich encyclopedia article ID",
            "type": "External identifier"
        },
        "P2273": {
            "title": "Heidelberg Academy for Sciences and Humanities member ID",
            "type": "External identifier"
        },
        "P2275": {
            "title": "World Health Organisation International Nonproprietary Name",
            "type": "Monolingual text"
        },
        "P2276": {
            "title": "UEFA player ID",
            "type": "External identifier"
        },
        "P2277": {
            "title": "Magdeburger Biographisches Lexikon",
            "type": "External identifier"
        },
        "P2278": {
            "title": "Member of the Hellenic Parliament ID",
            "type": "External identifier"
        },
        "P2279": {
            "title": "ambitus",
            "type": "Item"
        },
        "P2280": {
            "title": "Austrian Parliament ID",
            "type": "External identifier"
        },
        "P2281": {
            "title": "iTunes album ID",
            "type": "External identifier"
        },
        "P2282": {
            "title": "Groeningemuseum work PID",
            "type": "External identifier"
        },
        "P2283": {
            "title": "uses",
            "type": "Item"
        },
        "P2284": {
            "title": "price",
            "type": "Quantity"
        },
        "P2285": {
            "title": "periapsis date",
            "type": "Point in time"
        },
        "P2286": {
            "title": "arterial supply",
            "type": "Item"
        },
        "P2287": {
            "title": "CRIStin ID",
            "type": "External identifier"
        },
        "P2288": {
            "title": "lymphatic drainage",
            "type": "Item"
        },
        "P2289": {
            "title": "venous drainage",
            "type": "Item"
        },
        "P229": {
            "title": "IATA airline designator",
            "type": "String"
        },
        "P2290": {
            "title": "Danish parish code",
            "type": "External identifier"
        },
        "P2291": {
            "title": "charted in",
            "type": "Item"
        },
        "P2292": {
            "title": "consumption rate",
            "type": "Quantity"
        },
        "P2293": {
            "title": "genetic association",
            "type": "Item"
        },
        "P2294": {
            "title": "balance of trade",
            "type": "Quantity"
        },
        "P2295": {
            "title": "net profit",
            "type": "Quantity"
        },
        "P2296": {
            "title": "money supply",
            "type": "Quantity"
        },
        "P2297": {
            "title": "employment by economic sector",
            "type": "Quantity"
        },
        "P2298": {
            "title": "NSDAP membership number (1925\u20131945)",
            "type": "External identifier"
        },
        "P2299": {
            "title": "PPP GDP per capita",
            "type": "Quantity"
        },
        "P230": {
            "title": "ICAO airline designator",
            "type": "String"
        },
        "P2300": {
            "title": "minimal lethal dose",
            "type": "Quantity"
        },
        "P2302": {
            "title": "property constraint",
            "type": "Item"
        },
        "P2303": {
            "title": "exception to constraint",
            "type": "Item"
        },
        "P2304": {
            "title": "group by",
            "type": "Property"
        },
        "P2305": {
            "title": "item of property constraint",
            "type": "Item"
        },
        "P2306": {
            "title": "property",
            "type": "Property"
        },
        "P2307": {
            "title": "namespace",
            "type": "String"
        },
        "P2308": {
            "title": "class",
            "type": "Item"
        },
        "P2309": {
            "title": "relation",
            "type": "Item"
        },
        "P231": {
            "title": "CAS Registry Number",
            "type": "External identifier"
        },
        "P2310": {
            "title": "minimum date (property constraint)",
            "type": "Point in time"
        },
        "P2311": {
            "title": "maximum date (property constraint)",
            "type": "Point in time"
        },
        "P2312": {
            "title": "maximum quantity (property constraint)",
            "type": "Quantity"
        },
        "P2313": {
            "title": "minimum quantity (property constraint)",
            "type": "Quantity"
        },
        "P2315": {
            "title": "comment (DEPRECATED)",
            "type": "Monolingual text"
        },
        "P2316": {
            "title": "constraint status",
            "type": "Item"
        },
        "P2317": {
            "title": "call sign",
            "type": "String"
        },
        "P2318": {
            "title": "debut participant",
            "type": "Item"
        },
        "P2319": {
            "title": "elector",
            "type": "Item"
        },
        "P232": {
            "title": "EC ID",
            "type": "External identifier"
        },
        "P2320": {
            "title": "aftershocks",
            "type": "Quantity"
        },
        "P2321": {
            "title": "general classification of race participants",
            "type": "Item"
        },
        "P2322": {
            "title": "article ID",
            "type": "String"
        },
        "P2323": {
            "title": "Swedish Olympic Committee athlete ID",
            "type": "External identifier"
        },
        "P2324": {
            "title": "quantity buried",
            "type": "Quantity"
        },
        "P2325": {
            "title": "mean anomaly",
            "type": "Quantity"
        },
        "P2326": {
            "title": "GNS Unique Feature ID",
            "type": "External identifier"
        },
        "P2327": {
            "title": "ProCyclingStats race ID",
            "type": "External identifier"
        },
        "P2328": {
            "title": "ProCyclingStats team ID",
            "type": "External identifier"
        },
        "P2329": {
            "title": "antagonist muscle",
            "type": "Item"
        },
        "P233": {
            "title": "canonical SMILES",
            "type": "String"
        },
        "P2330": {
            "title": "Cycling Archives race ID",
            "type": "External identifier"
        },
        "P2331": {
            "title": "Cycling Archives team ID",
            "type": "External identifier"
        },
        "P2332": {
            "title": "Dictionary of Art Historians ID",
            "type": "External identifier"
        },
        "P2333": {
            "title": "Norwegian organisation number",
            "type": "External identifier"
        },
        "P2334": {
            "title": "Swedish Film Database film ID",
            "type": "External identifier"
        },
        "P2335": {
            "title": "SFDb company ID",
            "type": "External identifier"
        },
        "P2336": {
            "title": "SFDb soundtrack ID",
            "type": "External identifier"
        },
        "P2337": {
            "title": "SFDb group ID",
            "type": "External identifier"
        },
        "P2338": {
            "title": "Musopen composer ID",
            "type": "External identifier"
        },
        "P2339": {
            "title": "BoardGameGeek ID",
            "type": "External identifier"
        },
        "P234": {
            "title": "InChI",
            "type": "External identifier"
        },
        "P2340": {
            "title": "CESAR person ID",
            "type": "External identifier"
        },
        "P2341": {
            "title": "indigenous to",
            "type": "Item"
        },
        "P2342": {
            "title": "AGORHA person/institution ID",
            "type": "External identifier"
        },
        "P2343": {
            "title": "playing range image",
            "type": "Commons media file"
        },
        "P2344": {
            "title": "AGORHA work ID",
            "type": "External identifier"
        },
        "P2345": {
            "title": "AGORHA event identifier",
            "type": "External identifier"
        },
        "P2346": {
            "title": "Elonet movie ID",
            "type": "External identifier"
        },
        "P2347": {
            "title": "YSO ID",
            "type": "External identifier"
        },
        "P2348": {
            "title": "time period",
            "type": "Item"
        },
        "P2349": {
            "title": "Stuttgart Database of Scientific Illustrators ID",
            "type": "External identifier"
        },
        "P235": {
            "title": "InChIKey",
            "type": "External identifier"
        },
        "P2350": {
            "title": "SpeedSkatingBase.eu ID",
            "type": "External identifier"
        },
        "P2351": {
            "title": "number of graves",
            "type": "Quantity"
        },
        "P2352": {
            "title": "applies to taxon",
            "type": "Item"
        },
        "P2353": {
            "title": "statistical unit",
            "type": "Item"
        },
        "P2354": {
            "title": "has list",
            "type": "Item"
        },
        "P2355": {
            "title": "UNESCO Atlas of the World's Languages in Danger ID",
            "type": "External identifier"
        },
        "P2357": {
            "title": "Classification of Instructional Programs code",
            "type": "String"
        },
        "P2358": {
            "title": "Roman praenomen",
            "type": "Item"
        },
        "P2359": {
            "title": "Roman nomen gentilicium",
            "type": "Item"
        },
        "P236": {
            "title": "ISSN",
            "type": "External identifier"
        },
        "P2360": {
            "title": "intended public",
            "type": "Item"
        },
        "P2361": {
            "title": "online service",
            "type": "Item"
        },
        "P2362": {
            "title": "time to altitude",
            "type": "Quantity"
        },
        "P2363": {
            "title": "NMHH film rating",
            "type": "Item"
        },
        "P2364": {
            "title": "production code",
            "type": "String"
        },
        "P2365": {
            "title": "Roman cognomen",
            "type": "Item"
        },
        "P2366": {
            "title": "Roman agnomen",
            "type": "Item"
        },
        "P2367": {
            "title": "Australian Stratigraphic Units Database ID",
            "type": "External identifier"
        },
        "P2368": {
            "title": "Sandbox-Property",
            "type": "Property"
        },
        "P2369": {
            "title": "Soccerway player ID",
            "type": "External identifier"
        },
        "P237": {
            "title": "coat of arms",
            "type": "Item"
        },
        "P2370": {
            "title": "conversion to SI unit",
            "type": "Quantity"
        },
        "P2371": {
            "title": "FAO risk status",
            "type": "Item"
        },
        "P2372": {
            "title": "ODIS ID",
            "type": "External identifier"
        },
        "P2373": {
            "title": "Genius artist ID",
            "type": "External identifier"
        },
        "P2374": {
            "title": "natural abundance",
            "type": "Quantity"
        },
        "P2375": {
            "title": "has superpartner",
            "type": "Item"
        },
        "P2376": {
            "title": "superpartner of",
            "type": "Item"
        },
        "P2377": {
            "title": "MediaWiki hooks used",
            "type": "Item"
        },
        "P2378": {
            "title": "issued by",
            "type": "Item"
        },
        "P2379": {
            "title": "deprecated in version",
            "type": "Item"
        },
        "P238": {
            "title": "IATA airport code",
            "type": "String"
        },
        "P2380": {
            "title": "French Sculpture Census artist ID",
            "type": "External identifier"
        },
        "P2381": {
            "title": "Academic Tree ID",
            "type": "External identifier"
        },
        "P2382": {
            "title": "Chemins de m\u00e9moire ID",
            "type": "External identifier"
        },
        "P2383": {
            "title": "CTHS person ID",
            "type": "External identifier"
        },
        "P2384": {
            "title": "statement describes",
            "type": "Item"
        },
        "P2385": {
            "title": "French diocesan architects ID",
            "type": "External identifier"
        },
        "P2386": {
            "title": "diameter",
            "type": "Quantity"
        },
        "P2387": {
            "title": "Elonet person ID",
            "type": "External identifier"
        },
        "P2388": {
            "title": "office held by head of the organisation",
            "type": "Item"
        },
        "P2389": {
            "title": "organisation directed from the office",
            "type": "Item"
        },
        "P239": {
            "title": "ICAO airport code",
            "type": "String"
        },
        "P2390": {
            "title": "Ballotpedia ID",
            "type": "External identifier"
        },
        "P2391": {
            "title": "OKPO ID",
            "type": "External identifier"
        },
        "P2392": {
            "title": "teaching method",
            "type": "Item"
        },
        "P2393": {
            "title": "NCBI Locus tag",
            "type": "External identifier"
        },
        "P2394": {
            "title": "MGI Gene Symbol",
            "type": "External identifier"
        },
        "P2396": {
            "title": "image of function",
            "type": "Item"
        },
        "P2397": {
            "title": "YouTube channel ID",
            "type": "External identifier"
        },
        "P2398": {
            "title": "MLS player ID",
            "type": "External identifier"
        },
        "P2399": {
            "title": "British Council artist ID",
            "type": "External identifier"
        },
        "P240": {
            "title": "FAA airport code",
            "type": "String"
        },
        "P2400": {
            "title": "JMDb film ID",
            "type": "External identifier"
        },
        "P2401": {
            "title": "Six Degrees of Francis Bacon ID",
            "type": "External identifier"
        },
        "P2402": {
            "title": "total expenditure",
            "type": "Quantity"
        },
        "P2403": {
            "title": "total assets",
            "type": "Quantity"
        },
        "P2404": {
            "title": "time-weighted average exposure limit",
            "type": "Quantity"
        },
        "P2405": {
            "title": "ceiling exposure limit",
            "type": "Quantity"
        },
        "P2406": {
            "title": "maximum peak exposure limit",
            "type": "Quantity"
        },
        "P2407": {
            "title": "short-term exposure limit",
            "type": "Quantity"
        },
        "P2408": {
            "title": "set in period",
            "type": "Item"
        },
        "P2409": {
            "title": "CiNii article ID",
            "type": "External identifier"
        },
        "P241": {
            "title": "military branch",
            "type": "Item"
        },
        "P2410": {
            "title": "WikiPathways ID",
            "type": "String"
        },
        "P2411": {
            "title": "Artsy gene",
            "type": "String"
        },
        "P2412": {
            "title": "Fashion Model Directory designer ID",
            "type": "External identifier"
        },
        "P2413": {
            "title": "Fashion Model Directory magazine ID",
            "type": "External identifier"
        },
        "P2414": {
            "title": "substrate of",
            "type": "Item"
        },
        "P2415": {
            "title": "personal best",
            "type": "Quantity"
        },
        "P2416": {
            "title": "sports discipline competed in",
            "type": "Item"
        },
        "P2417": {
            "title": "stage classification",
            "type": "Item"
        },
        "P2418": {
            "title": "Structurae person ID",
            "type": "External identifier"
        },
        "P242": {
            "title": "locator map image",
            "type": "Commons media file"
        },
        "P2421": {
            "title": "Prosopographia Attica",
            "type": "External identifier"
        },
        "P2423": {
            "title": "FIE fencer ID",
            "type": "External identifier"
        },
        "P2424": {
            "title": "Berlin cultural heritage ID",
            "type": "External identifier"
        },
        "P2425": {
            "title": "service ribbon image",
            "type": "Commons media file"
        },
        "P2426": {
            "title": "Xeno-canto species ID",
            "type": "External identifier"
        },
        "P2427": {
            "title": "GRID ID",
            "type": "External identifier"
        },
        "P2428": {
            "title": "RePEc Short-ID",
            "type": "External identifier"
        },
        "P2429": {
            "title": "expected completeness",
            "type": "Item"
        },
        "P243": {
            "title": "OCLC control number",
            "type": "External identifier"
        },
        "P2430": {
            "title": "takeoff roll",
            "type": "Quantity"
        },
        "P2431": {
            "title": "Thyssen-Bornemisza artist ID",
            "type": "External identifier"
        },
        "P2432": {
            "title": "J. Paul Getty Museum artist id",
            "type": "External identifier"
        },
        "P2433": {
            "title": "gender of a scientific name of a genus",
            "type": "Item"
        },
        "P2434": {
            "title": "Panarctic Flora ID",
            "type": "External identifier"
        },
        "P2435": {
            "title": "PORT person ID",
            "type": "External identifier"
        },
        "P2436": {
            "title": "voltage",
            "type": "Quantity"
        },
        "P2437": {
            "title": "number of seasons",
            "type": "Quantity"
        },
        "P2438": {
            "title": "narrator",
            "type": "Item"
        },
        "P2439": {
            "title": "language",
            "type": "Item"
        },
        "P244": {
            "title": "Library of Congress authority ID",
            "type": "External identifier"
        },
        "P2440": {
            "title": "transliteration",
            "type": "String"
        },
        "P2441": {
            "title": "literal translation",
            "type": "Monolingual text"
        },
        "P2442": {
            "title": "conversion to standard unit",
            "type": "Quantity"
        },
        "P2443": {
            "title": "stage reached",
            "type": "Item"
        },
        "P2444": {
            "title": "homoglyph",
            "type": "Item"
        },
        "P2445": {
            "title": "metasubclass of",
            "type": "Item"
        },
        "P2446": {
            "title": "Transfermarkt player ID",
            "type": "External identifier"
        },
        "P2447": {
            "title": "Transfermarkt manager ID",
            "type": "External identifier"
        },
        "P2448": {
            "title": "Turkish Football Federation player ID",
            "type": "External identifier"
        },
        "P2449": {
            "title": "Turkish Football Federation coach ID",
            "type": "External identifier"
        },
        "P245": {
            "title": "ULAN ID",
            "type": "External identifier"
        },
        "P2450": {
            "title": "Encyclop\u00e6dia Britannica contributor ID",
            "type": "External identifier"
        },
        "P2451": {
            "title": "MAME ROM",
            "type": "External identifier"
        },
        "P2452": {
            "title": "GeoNames feature code",
            "type": "External identifier"
        },
        "P2453": {
            "title": "nominee",
            "type": "Item"
        },
        "P2454": {
            "title": "KNAW past member ID",
            "type": "External identifier"
        },
        "P2455": {
            "title": "Species Profile and Threats Database ID",
            "type": "External identifier"
        },
        "P2456": {
            "title": "DBLP ID",
            "type": "External identifier"
        },
        "P2457": {
            "title": "Australian National Shipwreck ID",
            "type": "External identifier"
        },
        "P2458": {
            "title": "Mackolik.com player ID",
            "type": "External identifier"
        },
        "P2459": {
            "title": "IBU biathlete ID",
            "type": "External identifier"
        },
        "P246": {
            "title": "element symbol",
            "type": "String"
        },
        "P2460": {
            "title": "Persons of Ancient Athens",
            "type": "External identifier"
        },
        "P2461": {
            "title": "ComLaw ID",
            "type": "External identifier"
        },
        "P2462": {
            "title": "member of the deme",
            "type": "Item"
        },
        "P2463": {
            "title": "elibrary.ru organisation ID",
            "type": "External identifier"
        },
        "P2464": {
            "title": "BugGuide ID",
            "type": "External identifier"
        },
        "P2465": {
            "title": "Allcinema film ID",
            "type": "External identifier"
        },
        "P2467": {
            "title": "Global Geoparks Network ID",
            "type": "External identifier"
        },
        "P2468": {
            "title": "Theatricalia theatre ID",
            "type": "External identifier"
        },
        "P2469": {
            "title": "Theatricalia person ID",
            "type": "External identifier"
        },
        "P247": {
            "title": "COSPAR ID",
            "type": "External identifier"
        },
        "P2470": {
            "title": "Talousel\u00e4m\u00e4n vaikuttajat ID",
            "type": "External identifier"
        },
        "P2471": {
            "title": "Models.com person ID",
            "type": "External identifier"
        },
        "P2472": {
            "title": "ACMA Radiocommunications Licence ID",
            "type": "External identifier"
        },
        "P2473": {
            "title": "IGCPV ID",
            "type": "External identifier"
        },
        "P2474": {
            "title": "CDLI ID",
            "type": "External identifier"
        },
        "P2475": {
            "title": "NAVA ID",
            "type": "External identifier"
        },
        "P2476": {
            "title": "HNI person/institution ID",
            "type": "External identifier"
        },
        "P2477": {
            "title": "TBRC Resource ID",
            "type": "External identifier"
        },
        "P2478": {
            "title": "Railways Archive event ID",
            "type": "External identifier"
        },
        "P2479": {
            "title": "SPDX ID",
            "type": "External identifier"
        },
        "P248": {
            "title": "stated in",
            "type": "Item"
        },
        "P2480": {
            "title": "IHO Hydrographic Dictionary (S-32) Number",
            "type": "External identifier"
        },
        "P2481": {
            "title": "Elite Prospects player ID",
            "type": "External identifier"
        },
        "P2482": {
            "title": "SABR ID",
            "type": "External identifier"
        },
        "P2483": {
            "title": "NCES District ID",
            "type": "External identifier"
        },
        "P2484": {
            "title": "NCES School ID",
            "type": "External identifier"
        },
        "P2485": {
            "title": "Fashion Model Directory photographer ID",
            "type": "External identifier"
        },
        "P2486": {
            "title": "Fashion Model Directory brand ID",
            "type": "External identifier"
        },
        "P2487": {
            "title": "page at website of Belarus Geocenter",
            "type": "External identifier"
        },
        "P2488": {
            "title": "page at Belarus Globe website",
            "type": "URL"
        },
        "P2489": {
            "title": "page at hram.by",
            "type": "External identifier"
        },
        "P249": {
            "title": "ticker symbol",
            "type": "String"
        },
        "P2490": {
            "title": "page at OSTIS Belarus Wiki",
            "type": "String"
        },
        "P2491": {
            "title": "Radzima.org ID",
            "type": "External identifier"
        },
        "P2492": {
            "title": "MTMT author ID",
            "type": "External identifier"
        },
        "P2493": {
            "title": "OM institution ID",
            "type": "External identifier"
        },
        "P2494": {
            "title": "Latvian cultural heritage register ID",
            "type": "External identifier"
        },
        "P2496": {
            "title": "Latvian toponymic names database ID",
            "type": "External identifier"
        },
        "P2497": {
            "title": "Latvian National Address Register ID",
            "type": "External identifier"
        },
        "P2498": {
            "title": "Catalan Biographical Dictionary of Women ID",
            "type": "External identifier"
        },
        "P2499": {
            "title": "league level above",
            "type": "Item"
        },
        "P25": {
            "title": "mother",
            "type": "Item"
        },
        "P2500": {
            "title": "league level below",
            "type": "Item"
        },
        "P2501": {
            "title": "results",
            "type": "Item"
        },
        "P2502": {
            "title": "classification of cycling race",
            "type": "Item"
        },
        "P2503": {
            "title": "Historical Gazetteer (GOV) ID",
            "type": "External identifier"
        },
        "P2504": {
            "title": "Norwegian municipality number",
            "type": "External identifier"
        },
        "P2505": {
            "title": "carries",
            "type": "Item"
        },
        "P2506": {
            "title": "INSEE canton code",
            "type": "External identifier"
        },
        "P2507": {
            "title": "corrigendum / erratum",
            "type": "Item"
        },
        "P2508": {
            "title": "KINENOTE film ID",
            "type": "External identifier"
        },
        "P2509": {
            "title": "Movie Walker ID",
            "type": "External identifier"
        },
        "P2510": {
            "title": "National Discography of Italian Song artist/group ID",
            "type": "External identifier"
        },
        "P2511": {
            "title": "MSK Gent work PID",
            "type": "External identifier"
        },
        "P2512": {
            "title": "spin-off",
            "type": "Item"
        },
        "P2513": {
            "title": "Jamendo album ID",
            "type": "External identifier"
        },
        "P2514": {
            "title": "Jamendo artist ID",
            "type": "External identifier"
        },
        "P2515": {
            "title": "costume designer",
            "type": "Item"
        },
        "P2516": {
            "title": "Australian Ramsar site ID",
            "type": "External identifier"
        },
        "P2517": {
            "title": "category for recipients of this award",
            "type": "Item"
        },
        "P2518": {
            "title": "Scope.dk film ID",
            "type": "External identifier"
        },
        "P2519": {
            "title": "Scope.dk person ID",
            "type": "External identifier"
        },
        "P2520": {
            "title": "UNESCO Biosphere Reserve url",
            "type": "URL"
        },
        "P2521": {
            "title": "female form of label",
            "type": "Monolingual text"
        },
        "P2522": {
            "title": "victory",
            "type": "Item"
        },
        "P2524": {
            "title": "SEED number",
            "type": "External identifier"
        },
        "P2525": {
            "title": "Ramsar Sites Information Service ID",
            "type": "External identifier"
        },
        "P2526": {
            "title": "National Historic Sites of Canada ID",
            "type": "External identifier"
        },
        "P2527": {
            "title": "earthquake magnitude on the moment magnitude scale",
            "type": "Quantity"
        },
        "P2528": {
            "title": "earthquake magnitude on the Richter magnitude scale",
            "type": "Quantity"
        },
        "P2529": {
            "title": "\u010cSFD film ID",
            "type": "External identifier"
        },
        "P2530": {
            "title": "Box Office Mojo franchise ID",
            "type": "External identifier"
        },
        "P2531": {
            "title": "Box Office Mojo studio ID",
            "type": "External identifier"
        },
        "P2532": {
            "title": "lowest atmospheric pressure",
            "type": "Quantity"
        },
        "P2533": {
            "title": "WomenWriters ID",
            "type": "External identifier"
        },
        "P2534": {
            "title": "defining formula",
            "type": "Mathematical expression"
        },
        "P2535": {
            "title": "Sandbox-Mathematical expression",
            "type": "Mathematical expression"
        },
        "P2536": {
            "title": "Sandbox-External identifier",
            "type": "External identifier"
        },
        "P2537": {
            "title": "Free Software Directory entry",
            "type": "External identifier"
        },
        "P2538": {
            "title": "Nationalmuseum Sweden artist ID",
            "type": "External identifier"
        },
        "P2539": {
            "title": "Nationalmuseum Sweden artwork ID",
            "type": "External identifier"
        },
        "P2540": {
            "title": "Aarne\u2013Thompson\u2013Uther Tale Type Index",
            "type": "String"
        },
        "P2541": {
            "title": "operating area",
            "type": "Item"
        },
        "P2542": {
            "title": "acceptable daily intake",
            "type": "Quantity"
        },
        "P2545": {
            "title": "bowling style",
            "type": "Item"
        },
        "P2546": {
            "title": "sidekick of",
            "type": "Item"
        },
        "P2547": {
            "title": "perimeter",
            "type": "Quantity"
        },
        "P2548": {
            "title": "strand orientation",
            "type": "Item"
        },
        "P2549": {
            "title": "Italian Senate of the Republic ID",
            "type": "External identifier"
        },
        "P2550": {
            "title": "recording or performance of",
            "type": "Item"
        },
        "P2551": {
            "title": "used metre",
            "type": "Item"
        },
        "P2552": {
            "title": "quantitative metrical pattern",
            "type": "String"
        },
        "P2553": {
            "title": "in work",
            "type": "Item"
        },
        "P2554": {
            "title": "production designer",
            "type": "Item"
        },
        "P2555": {
            "title": "fee",
            "type": "Quantity"
        },
        "P2556": {
            "title": "bore",
            "type": "Quantity"
        },
        "P2557": {
            "title": "stroke",
            "type": "Quantity"
        },
        "P2558": {
            "title": "autores.uy database id",
            "type": "External identifier"
        },
        "P2559": {
            "title": "Wikidata usage instructions",
            "type": "Monolingual text"
        },
        "P2560": {
            "title": "GPU",
            "type": "Item"
        },
        "P2561": {
            "title": "name",
            "type": "Monolingual text"
        },
        "P2562": {
            "title": "married name",
            "type": "Monolingual text"
        },
        "P2563": {
            "title": "superhuman feature or ability",
            "type": "Item"
        },
        "P2564": {
            "title": "K\u00f6ppen climate classification",
            "type": "Item"
        },
        "P2565": {
            "title": "global-warming potential",
            "type": "Quantity"
        },
        "P2566": {
            "title": "ECHA InfoCard ID",
            "type": "External identifier"
        },
        "P2567": {
            "title": "amended by",
            "type": "Item"
        },
        "P2568": {
            "title": "repealed by",
            "type": "Item"
        },
        "P2571": {
            "title": "uncertainty corresponds to",
            "type": "Item"
        },
        "P2572": {
            "title": "Twitter hashtag",
            "type": "String"
        },
        "P2573": {
            "title": "number of out of school children",
            "type": "Quantity"
        },
        "P2574": {
            "title": "National-Football-Teams.com player ID",
            "type": "External identifier"
        },
        "P2575": {
            "title": "measures",
            "type": "Item"
        },
        "P2576": {
            "title": "UCSC Genome Browser assembly ID",
            "type": "External identifier"
        },
        "P2577": {
            "title": "admissible rule in",
            "type": "Item"
        },
        "P2578": {
            "title": "studies",
            "type": "Item"
        },
        "P2579": {
            "title": "studied by",
            "type": "Item"
        },
        "P2580": {
            "title": "Baltisches Biographisches Lexikon digital ID",
            "type": "External identifier"
        },
        "P2581": {
            "title": "BabelNet ID",
            "type": "External identifier"
        },
        "P2582": {
            "title": "J. Paul Getty Museum object ID",
            "type": "External identifier"
        },
        "P2583": {
            "title": "distance from Earth",
            "type": "Quantity"
        },
        "P2584": {
            "title": "Australian Wetlands Code",
            "type": "External identifier"
        },
        "P2585": {
            "title": "INSEE region code",
            "type": "External identifier"
        },
        "P2586": {
            "title": "INSEE department code",
            "type": "External identifier"
        },
        "P2587": {
            "title": "has phoneme",
            "type": "Item"
        },
        "P2588": {
            "title": "administrative code of Indonesia",
            "type": "External identifier"
        },
        "P2589": {
            "title": "Statistics Indonesia ethnicity code",
            "type": "External identifier"
        },
        "P2590": {
            "title": "BPS language code",
            "type": "External identifier"
        },
        "P2591": {
            "title": "grammatical option indicates",
            "type": "Item"
        },
        "P2592": {
            "title": "Qu\u00e9bec cultural heritage directory people identifier",
            "type": "External identifier"
        },
        "P2593": {
            "title": "Latvian Olympic Committee athlete ID",
            "type": "External identifier"
        },
        "P2595": {
            "title": "maximum gradient",
            "type": "Quantity"
        },
        "P2596": {
            "title": "culture",
            "type": "Item"
        },
        "P2597": {
            "title": "Gram staining",
            "type": "Item"
        },
        "P2598": {
            "title": "serial number",
            "type": "String"
        },
        "P2599": {
            "title": "block size",
            "type": "Quantity"
        },
        "P26": {
            "title": "spouse",
            "type": "Item"
        },
        "P2600": {
            "title": "Geni.com profile ID",
            "type": "External identifier"
        },
        "P2601": {
            "title": "Eurohockey.com player ID",
            "type": "External identifier"
        },
        "P2602": {
            "title": "HockeyDB.com player ID",
            "type": "External identifier"
        },
        "P2603": {
            "title": "Kinopoisk film ID",
            "type": "External identifier"
        },
        "P2604": {
            "title": "Kinopoisk person ID",
            "type": "External identifier"
        },
        "P2605": {
            "title": "\u010cSFD person ID",
            "type": "External identifier"
        },
        "P2606": {
            "title": "PlayStation ID",
            "type": "External identifier"
        },
        "P2607": {
            "title": "BookBrainz creator ID",
            "type": "External identifier"
        },
        "P2610": {
            "title": "thickness",
            "type": "Quantity"
        },
        "P2611": {
            "title": "TED speaker ID",
            "type": "External identifier"
        },
        "P2612": {
            "title": "TED topic ID",
            "type": "External identifier"
        },
        "P2613": {
            "title": "TED talk ID",
            "type": "External identifier"
        },
        "P2614": {
            "title": "World Heritage criteria",
            "type": "Item"
        },
        "P2618": {
            "title": "SHOWA ID",
            "type": "External identifier"
        },
        "P2619": {
            "title": "Hungarian company ID",
            "type": "External identifier"
        },
        "P2620": {
            "title": "ISO 15924 numeric code",
            "type": "External identifier"
        },
        "P2621": {
            "title": "Site of Special Scientific Interest (England) ID",
            "type": "External identifier"
        },
        "P2622": {
            "title": "Companies House ID",
            "type": "External identifier"
        },
        "P2623": {
            "title": "MEK ID",
            "type": "External identifier"
        },
        "P2624": {
            "title": "MetroLyrics ID",
            "type": "External identifier"
        },
        "P2625": {
            "title": "PASE ID",
            "type": "External identifier"
        },
        "P2626": {
            "title": "DNF person ID",
            "type": "External identifier"
        },
        "P2627": {
            "title": "ISO 9362 SWIFT/BIC code",
            "type": "External identifier"
        },
        "P2628": {
            "title": "German tax authority ID",
            "type": "External identifier"
        },
        "P2629": {
            "title": "BBFC rating",
            "type": "Item"
        },
        "P263": {
            "title": "official residence",
            "type": "Item"
        },
        "P2630": {
            "title": "cost of damage",
            "type": "Quantity"
        },
        "P2631": {
            "title": "Turner Classic Movies film ID",
            "type": "External identifier"
        },
        "P2632": {
            "title": "place of detention",
            "type": "Item"
        },
        "P2633": {
            "title": "geography of topic",
            "type": "Item"
        },
        "P2634": {
            "title": "model",
            "type": "Item"
        },
        "P2635": {
            "title": "number of parts of a work of art",
            "type": "Quantity"
        },
        "P2636": {
            "title": "Minkultury film ID",
            "type": "External identifier"
        },
        "P2637": {
            "title": "RARS rating",
            "type": "Item"
        },
        "P2638": {
            "title": "TV.com ID",
            "type": "External identifier"
        },
        "P2639": {
            "title": "Filmportal ID",
            "type": "External identifier"
        },
        "P264": {
            "title": "record label",
            "type": "Item"
        },
        "P2640": {
            "title": "Swimrankings.net swimmer ID",
            "type": "External identifier"
        },
        "P2641": {
            "title": "Davis Cup player ID",
            "type": "External identifier"
        },
        "P2642": {
            "title": "Fed Cup player ID",
            "type": "External identifier"
        },
        "P2643": {
            "title": "Carnegie Classification of Institutions of Higher Education",
            "type": "Item"
        },
        "P2645": {
            "title": "mean lifetime",
            "type": "Quantity"
        },
        "P2646": {
            "title": "mirTarBase ID",
            "type": "External identifier"
        },
        "P2647": {
            "title": "source of material",
            "type": "Item"
        },
        "P2648": {
            "title": "Cycling Quotient ID men's race ID",
            "type": "External identifier"
        },
        "P2649": {
            "title": "Cycling Quotient men's team URL",
            "type": "URL"
        },
        "P2650": {
            "title": "interested in",
            "type": "Item"
        },
        "P2651": {
            "title": "CRICOS Provider Code",
            "type": "External identifier"
        },
        "P2652": {
            "title": "partnership with",
            "type": "Item"
        },
        "P2655": {
            "title": "Estyn ID",
            "type": "External identifier"
        },
        "P2657": {
            "title": "EU transparency register ID",
            "type": "External identifier"
        },
        "P2658": {
            "title": "Scoville grade",
            "type": "Quantity"
        },
        "P2659": {
            "title": "topographic isolation",
            "type": "Quantity"
        },
        "P2660": {
            "title": "topographic prominence",
            "type": "Quantity"
        },
        "P2661": {
            "title": "target interest rate",
            "type": "Quantity"
        },
        "P2662": {
            "title": "consumption rate per capita",
            "type": "Quantity"
        },
        "P2663": {
            "title": "tier 1 capital ratio (CETI)",
            "type": "Quantity"
        },
        "P2664": {
            "title": "units sold",
            "type": "Quantity"
        },
        "P2665": {
            "title": "alcohol by volume",
            "type": "Quantity"
        },
        "P2666": {
            "title": "Datahub page",
            "type": "External identifier"
        },
        "P2667": {
            "title": "corresponding template",
            "type": "Item"
        },
        "P2668": {
            "title": "stability of property value",
            "type": "Item"
        },
        "P2669": {
            "title": "discontinued date",
            "type": "Point in time"
        },
        "P267": {
            "title": "ATC code",
            "type": "External identifier"
        },
        "P2670": {
            "title": "has parts of the class",
            "type": "Item"
        },
        "P2671": {
            "title": "Google Knowledge Graph ID",
            "type": "External identifier"
        },
        "P2672": {
            "title": "SOATO ID",
            "type": "External identifier"
        },
        "P2673": {
            "title": "next crossing upstream",
            "type": "Item"
        },
        "P2674": {
            "title": "next crossing downstream",
            "type": "Item"
        },
        "P2675": {
            "title": "reply to",
            "type": "Item"
        },
        "P2676": {
            "title": "rating certificate ID",
            "type": "String"
        },
        "P2677": {
            "title": "relative position within image",
            "type": "String"
        },
        "P2678": {
            "title": "Russiancinema.ru film ID",
            "type": "External identifier"
        },
        "P2679": {
            "title": "author of foreword",
            "type": "Item"
        },
        "P268": {
            "title": "BnF ID",
            "type": "External identifier"
        },
        "P2680": {
            "title": "author of afterword",
            "type": "Item"
        },
        "P2681": {
            "title": "is recto of",
            "type": "Item"
        },
        "P2682": {
            "title": "is verso of",
            "type": "Item"
        },
        "P2683": {
            "title": "Bekker Number",
            "type": "External identifier"
        },
        "P2684": {
            "title": "Kijkwijzer rating",
            "type": "Item"
        },
        "P2685": {
            "title": "Basketball-Reference.com NBA player ID",
            "type": "External identifier"
        },
        "P2686": {
            "title": "OpenSecrets people ID",
            "type": "External identifier"
        },
        "P2687": {
            "title": "NDL JPNO",
            "type": "External identifier"
        },
        "P2688": {
            "title": "Box Office Mojo person ID",
            "type": "External identifier"
        },
        "P2689": {
            "title": "BARTOC ID",
            "type": "External identifier"
        },
        "P269": {
            "title": "SUDOC authorities ID",
            "type": "External identifier"
        },
        "P2694": {
            "title": "ISU figure skater ID",
            "type": "External identifier"
        },
        "P2695": {
            "title": "type locality",
            "type": "Item"
        },
        "P2696": {
            "title": "FIG gymnast licence number",
            "type": "External identifier"
        },
        "P2697": {
            "title": "ESPNcricinfo.com player ID",
            "type": "External identifier"
        },
        "P2698": {
            "title": "CricketArchive player ID",
            "type": "External identifier"
        },
        "P2699": {
            "title": "URL",
            "type": "URL"
        },
        "P27": {
            "title": "country of citizenship",
            "type": "Item"
        },
        "P270": {
            "title": "CALIS ID",
            "type": "External identifier"
        },
        "P2700": {
            "title": "protocol",
            "type": "Item"
        },
        "P2701": {
            "title": "file format",
            "type": "Item"
        },
        "P2702": {
            "title": "dataset distribution",
            "type": "Item"
        },
        "P2703": {
            "title": "BFI work ID",
            "type": "External identifier"
        },
        "P2704": {
            "title": "EIDR identifier",
            "type": "External identifier"
        },
        "P2705": {
            "title": "Karate Records ID",
            "type": "External identifier"
        },
        "P2708": {
            "title": "Cycling Quotient women's race ID",
            "type": "External identifier"
        },
        "P2709": {
            "title": "Cycling Quotient female cyclist ID",
            "type": "External identifier"
        },
        "P271": {
            "title": "CiNii author ID (books)",
            "type": "External identifier"
        },
        "P2710": {
            "title": "minimal lethal concentration",
            "type": "Quantity"
        },
        "P2712": {
            "title": "median lethal concentration",
            "type": "Quantity"
        },
        "P2713": {
            "title": "sectional view",
            "type": "Commons media file"
        },
        "P2715": {
            "title": "elected in",
            "type": "Item"
        },
        "P2716": {
            "title": "collage image",
            "type": "Commons media file"
        },
        "P2717": {
            "title": "no-observed-adverse-effect level",
            "type": "Quantity"
        },
        "P2718": {
            "title": "lowest-observed-adverse-effect level",
            "type": "Quantity"
        },
        "P2719": {
            "title": "Hungarian-style transcription",
            "type": "String"
        },
        "P272": {
            "title": "production company",
            "type": "Item"
        },
        "P2720": {
            "title": "embed URL template",
            "type": "String"
        },
        "P2721": {
            "title": "Encyclopaedia Metallum release ID",
            "type": "External identifier"
        },
        "P2722": {
            "title": "Deezer artist ID",
            "type": "External identifier"
        },
        "P2723": {
            "title": "Deezer album ID",
            "type": "External identifier"
        },
        "P2724": {
            "title": "Deezer track ID",
            "type": "External identifier"
        },
        "P2725": {
            "title": "GOG application ID",
            "type": "External identifier"
        },
        "P2726": {
            "title": "UIPM ID",
            "type": "External identifier"
        },
        "P2727": {
            "title": "United World Wrestling ID",
            "type": "External identifier"
        },
        "P2728": {
            "title": "CageMatch worker ID",
            "type": "External identifier"
        },
        "P2729": {
            "title": "Badminton World Federation ID",
            "type": "External identifier"
        },
        "P2730": {
            "title": "ISSF ID",
            "type": "External identifier"
        },
        "P2731": {
            "title": "Projeto Excel\u00eancias ID",
            "type": "External identifier"
        },
        "P2732": {
            "title": "Pers\u00e9e author ID",
            "type": "External identifier"
        },
        "P2733": {
            "title": "Pers\u00e9e journal ID",
            "type": "External identifier"
        },
        "P2734": {
            "title": "Unz Review author identifier",
            "type": "External identifier"
        },
        "P2735": {
            "title": "Unz Review journal identifier",
            "type": "External identifier"
        },
        "P2736": {
            "title": "Biographical Directory of Federal Judges ID",
            "type": "External identifier"
        },
        "P2737": {
            "title": "union of",
            "type": "Item"
        },
        "P2738": {
            "title": "disjoint union of",
            "type": "Item"
        },
        "P2739": {
            "title": "typeface/font",
            "type": "Item"
        },
        "P274": {
            "title": "chemical formula",
            "type": "String"
        },
        "P2740": {
            "title": "ResearchGate institute ID",
            "type": "External identifier"
        },
        "P2741": {
            "title": "Tate artist identifier",
            "type": "External identifier"
        },
        "P2742": {
            "title": "Australian Geological Provinces ID",
            "type": "External identifier"
        },
        "P2743": {
            "title": "this zoological name is coordinate with",
            "type": "Item"
        },
        "P2744": {
            "title": "PASE name",
            "type": "String"
        },
        "P2745": {
            "title": "Dictionary of New Zealand Biography",
            "type": "External identifier"
        },
        "P2746": {
            "title": "production statistics",
            "type": "Item"
        },
        "P2747": {
            "title": "Filmiroda rating",
            "type": "Item"
        },
        "P2748": {
            "title": "PRONOM file format identifier",
            "type": "External identifier"
        },
        "P2749": {
            "title": "PRONOM software identifier",
            "type": "External identifier"
        },
        "P275": {
            "title": "license",
            "type": "Item"
        },
        "P2750": {
            "title": "Photographers' Identities Catalog ID",
            "type": "External identifier"
        },
        "P2751": {
            "title": "Roller Coaster Database ID",
            "type": "External identifier"
        },
        "P2752": {
            "title": "New Zealand Organisms Register ID",
            "type": "External identifier"
        },
        "P2753": {
            "title": "Dictionary of Canadian Biography ID",
            "type": "External identifier"
        },
        "P2754": {
            "title": "production date",
            "type": "Point in time"
        },
        "P2755": {
            "title": "exploitation visa number",
            "type": "External identifier"
        },
        "P2756": {
            "title": "EIRIN film rating",
            "type": "Item"
        },
        "P2758": {
            "title": "CNC film rating (France)",
            "type": "Item"
        },
        "P2759": {
            "title": "AUSNUT food ID",
            "type": "External identifier"
        },
        "P276": {
            "title": "location",
            "type": "Item"
        },
        "P2760": {
            "title": "NUTTAB food ID",
            "type": "External identifier"
        },
        "P2761": {
            "title": "Research Papers in Economics Series handle",
            "type": "External identifier"
        },
        "P2762": {
            "title": "Skyscraper Center building complex ID",
            "type": "External identifier"
        },
        "P2763": {
            "title": "Danish protected area ID",
            "type": "External identifier"
        },
        "P2764": {
            "title": "Wrestlingdata person ID",
            "type": "External identifier"
        },
        "P2765": {
            "title": "blue-style.com ID",
            "type": "External identifier"
        },
        "P2766": {
            "title": "ISO 4063 process number",
            "type": "External identifier"
        },
        "P2767": {
            "title": "JudoInside.com ID",
            "type": "External identifier"
        },
        "P2768": {
            "title": "BNE journal ID",
            "type": "External identifier"
        },
        "P2769": {
            "title": "budget",
            "type": "Quantity"
        },
        "P277": {
            "title": "programming language",
            "type": "Item"
        },
        "P2770": {
            "title": "source of income",
            "type": "Item"
        },
        "P2771": {
            "title": "D-U-N-S",
            "type": "External identifier"
        },
        "P2772": {
            "title": "FIS alpine skier ID",
            "type": "External identifier"
        },
        "P2773": {
            "title": "FIS cross-country skier ID",
            "type": "External identifier"
        },
        "P2774": {
            "title": "FIS freestyle skier ID",
            "type": "External identifier"
        },
        "P2775": {
            "title": "FIS ski jumper ID",
            "type": "External identifier"
        },
        "P2776": {
            "title": "FIS Nordic combined skier ID",
            "type": "External identifier"
        },
        "P2777": {
            "title": "FIS snowboarder ID",
            "type": "External identifier"
        },
        "P2778": {
            "title": "IAT triathlete ID",
            "type": "External identifier"
        },
        "P2779": {
            "title": "IAT weightlifter ID",
            "type": "External identifier"
        },
        "P278": {
            "title": "GOST 7.75\u201397 code",
            "type": "External identifier"
        },
        "P2780": {
            "title": "IAT diver ID",
            "type": "External identifier"
        },
        "P2781": {
            "title": "race time",
            "type": "Quantity"
        },
        "P2782": {
            "title": "Models.com client ID",
            "type": "External identifier"
        },
        "P2783": {
            "title": "Danish listed buildings case ID",
            "type": "External identifier"
        },
        "P2784": {
            "title": "Mercalli intensity scale",
            "type": "Item"
        },
        "P2786": {
            "title": "aerodrome reference point",
            "type": "Geographic coordinates"
        },
        "P2787": {
            "title": "longest span",
            "type": "Quantity"
        },
        "P2788": {
            "title": "Czech neighbourhood ID code",
            "type": "External identifier"
        },
        "P2789": {
            "title": "connects with",
            "type": "Item"
        },
        "P279": {
            "title": "subclass of",
            "type": "Item"
        },
        "P2790": {
            "title": "net tonnage",
            "type": "Quantity"
        },
        "P2791": {
            "title": "power consumed",
            "type": "Quantity"
        },
        "P2792": {
            "title": "ASF KID Cave Tag Number",
            "type": "External identifier"
        },
        "P2793": {
            "title": "clearance",
            "type": "Quantity"
        },
        "P2794": {
            "title": "Index Hepaticarum ID",
            "type": "External identifier"
        },
        "P2795": {
            "title": "directions",
            "type": "Monolingual text"
        },
        "P2796": {
            "title": "3DMet ID",
            "type": "External identifier"
        },
        "P2797": {
            "title": "sound power level",
            "type": "Quantity"
        },
        "P2798": {
            "title": "Loop ID",
            "type": "External identifier"
        },
        "P2799": {
            "title": "BVMC person ID",
            "type": "External identifier"
        },
        "P2800": {
            "title": "Beach Volleyball Database ID",
            "type": "External identifier"
        },
        "P2801": {
            "title": "FIVB beach volleyball player ID",
            "type": "External identifier"
        },
        "P2802": {
            "title": "fleet or registration number",
            "type": "String"
        },
        "P2803": {
            "title": "Wikidata time precision",
            "type": "Quantity"
        },
        "P2804": {
            "title": "World Sailing member ID",
            "type": "External identifier"
        },
        "P2805": {
            "title": "Goratings ID",
            "type": "External identifier"
        },
        "P2806": {
            "title": "vibration",
            "type": "Quantity"
        },
        "P2807": {
            "title": "molar volume",
            "type": "Quantity"
        },
        "P2808": {
            "title": "wavelength",
            "type": "Quantity"
        },
        "P2809": {
            "title": "Australasian Pollen and Spore Atlas Code",
            "type": "External identifier"
        },
        "P281": {
            "title": "postal code",
            "type": "String"
        },
        "P2810": {
            "title": "LPGA Tour ID",
            "type": "External identifier"
        },
        "P2811": {
            "title": "PGA Tour ID",
            "type": "External identifier"
        },
        "P2812": {
            "title": "MathWorld identifier",
            "type": "External identifier"
        },
        "P2813": {
            "title": "mouthpiece",
            "type": "Item"
        },
        "P2814": {
            "title": "P-number",
            "type": "External identifier"
        },
        "P2815": {
            "title": "ESR station code",
            "type": "External identifier"
        },
        "P2816": {
            "title": "HowLongToBeat ID",
            "type": "External identifier"
        },
        "P2817": {
            "title": "appears in the heritage monument list",
            "type": "Item"
        },
        "P2818": {
            "title": "Sherdog ID",
            "type": "External identifier"
        },
        "P2819": {
            "title": "Yandex.Music album ID",
            "type": "External identifier"
        },
        "P282": {
            "title": "writing system",
            "type": "Item"
        },
        "P2820": {
            "title": "cardinality of this set",
            "type": "Item"
        },
        "P2821": {
            "title": "by-product",
            "type": "Item"
        },
        "P2822": {
            "title": "by-product of",
            "type": "Item"
        },
        "P2823": {
            "title": "Royal Belgian Football Association player ID",
            "type": "External identifier"
        },
        "P2824": {
            "title": "Gazetteer of Planetary Nomenclature ID",
            "type": "External identifier"
        },
        "P2825": {
            "title": "via",
            "type": "Item"
        },
        "P2826": {
            "title": "Megogo ID",
            "type": "External identifier"
        },
        "P2827": {
            "title": "flower color",
            "type": "Item"
        },
        "P2828": {
            "title": "corporate officer",
            "type": "Item"
        },
        "P2829": {
            "title": "Internet Wrestling Database ID",
            "type": "External identifier"
        },
        "P2830": {
            "title": "Online World of Wrestling ID",
            "type": "External identifier"
        },
        "P2831": {
            "title": "totem",
            "type": "Item"
        },
        "P2832": {
            "title": "Joint Electronics Type Designation Automated System designation",
            "type": "External identifier"
        },
        "P2833": {
            "title": "ARKive ID",
            "type": "External identifier"
        },
        "P2834": {
            "title": "individual tax rate",
            "type": "Quantity"
        },
        "P2835": {
            "title": "lowest income threshold",
            "type": "Quantity"
        },
        "P2836": {
            "title": "highest income threshold",
            "type": "Quantity"
        },
        "P2838": {
            "title": "professional name (Japan)",
            "type": "Item"
        },
        "P2839": {
            "title": "gait",
            "type": "Item"
        },
        "P2840": {
            "title": "NSC number",
            "type": "External identifier"
        },
        "P2841": {
            "title": "age of onset",
            "type": "Item"
        },
        "P2842": {
            "title": "place of marriage",
            "type": "Item"
        },
        "P2843": {
            "title": "Benezit ID",
            "type": "External identifier"
        },
        "P2844": {
            "title": "incidence",
            "type": "Quantity"
        },
        "P2845": {
            "title": "RAN ID",
            "type": "External identifier"
        },
        "P2846": {
            "title": "wheelchair accessibility",
            "type": "Item"
        },
        "P2847": {
            "title": "Google+ ID",
            "type": "External identifier"
        },
        "P2848": {
            "title": "Wi-Fi",
            "type": "Item"
        },
        "P2849": {
            "title": "produced by",
            "type": "Item"
        },
        "P2850": {
            "title": "iTunes artist ID",
            "type": "External identifier"
        },
        "P2851": {
            "title": "payment types accepted",
            "type": "Item"
        },
        "P2852": {
            "title": "emergency phone number",
            "type": "Item"
        },
        "P2853": {
            "title": "electrical plug type",
            "type": "Item"
        },
        "P2854": {
            "title": "disease burden",
            "type": "Quantity"
        },
        "P2855": {
            "title": "VAT-rate",
            "type": "Quantity"
        },
        "P2856": {
            "title": "EU Surface Water Body Code",
            "type": "External identifier"
        },
        "P2857": {
            "title": "WWE.com superstar ID",
            "type": "External identifier"
        },
        "P2858": {
            "title": "KLOV ID",
            "type": "External identifier"
        },
        "P2859": {
            "title": "X-SAMPA Code",
            "type": "String"
        },
        "P286": {
            "title": "head coach",
            "type": "Item"
        },
        "P2860": {
            "title": "cites",
            "type": "Item"
        },
        "P2861": {
            "title": "Leidse Hoogleraren ID",
            "type": "External identifier"
        },
        "P2862": {
            "title": "Catalogus Professorum Academiae Rheno-Traiectinae ID",
            "type": "External identifier"
        },
        "P2863": {
            "title": "Nederlandse Molendatabase ID",
            "type": "External identifier"
        },
        "P2864": {
            "title": "OpenCritic ID",
            "type": "External identifier"
        },
        "P2865": {
            "title": "band number",
            "type": "External identifier"
        },
        "P2866": {
            "title": "Hollandsche Molen ID",
            "type": "External identifier"
        },
        "P2867": {
            "title": "Molenecho's ID",
            "type": "External identifier"
        },
        "P2868": {
            "title": "subject has role",
            "type": "Item"
        },
        "P2869": {
            "title": "record or record progression",
            "type": "Item"
        },
        "P287": {
            "title": "designed by",
            "type": "Item"
        },
        "P2870": {
            "title": "miRBase pre-miRNA ID",
            "type": "External identifier"
        },
        "P2871": {
            "title": "miRBase mature miRNA ID",
            "type": "External identifier"
        },
        "P2872": {
            "title": "tourist office",
            "type": "Item"
        },
        "P2873": {
            "title": "time in space",
            "type": "Quantity"
        },
        "P2874": {
            "title": "PubChem BioAssay ID (AID)",
            "type": "External identifier"
        },
        "P2875": {
            "title": "property usage tracking category",
            "type": "Item"
        },
        "P2876": {
            "title": "type of unit for this property",
            "type": "Item"
        },
        "P2877": {
            "title": "SureChEMBL ID",
            "type": "External identifier"
        },
        "P2878": {
            "title": "Minitel code",
            "type": "External identifier"
        },
        "P2879": {
            "title": "Library of the National Congress of Argentina ID",
            "type": "External identifier"
        },
        "P2880": {
            "title": "NIOSHTIC-2 ID",
            "type": "External identifier"
        },
        "P2881": {
            "title": "promoted",
            "type": "Item"
        },
        "P2882": {
            "title": "relegated",
            "type": "Item"
        },
        "P2883": {
            "title": "HKMDb film ID",
            "type": "External identifier"
        },
        "P2884": {
            "title": "mains voltage",
            "type": "Quantity"
        },
        "P2886": {
            "title": "Shakeosphere person ID",
            "type": "External identifier"
        },
        "P2887": {
            "title": "reserve number (Canada)",
            "type": "External identifier"
        },
        "P2888": {
            "title": "exact match",
            "type": "URL"
        },
        "P2889": {
            "title": "FamilySearch person ID",
            "type": "External identifier"
        },
        "P289": {
            "title": "vessel class",
            "type": "Item"
        },
        "P2892": {
            "title": "UMLS CUI",
            "type": "External identifier"
        },
        "P2893": {
            "title": "Skype username",
            "type": "String"
        },
        "P2894": {
            "title": "day of week",
            "type": "Item"
        },
        "P2895": {
            "title": "maximum sustained winds",
            "type": "Quantity"
        },
        "P2896": {
            "title": "publication interval",
            "type": "Quantity"
        },
        "P2897": {
            "title": "Eldoblaje Movie ID",
            "type": "External identifier"
        },
        "P2898": {
            "title": "Swedish county letter",
            "type": "External identifier"
        },
        "P2899": {
            "title": "minimum age",
            "type": "Quantity"
        },
        "P2900": {
            "title": "fax number",
            "type": "String"
        },
        "P2903": {
            "title": "Molendatabase verdwenen molens ID",
            "type": "External identifier"
        },
        "P2904": {
            "title": "Beer Advocate brewery ID",
            "type": "External identifier"
        },
        "P2905": {
            "title": "RateBeer brewery ID",
            "type": "External identifier"
        },
        "P2907": {
            "title": "timezone offset",
            "type": "Quantity"
        },
        "P2908": {
            "title": "SecondHandSongs song ID",
            "type": "External identifier"
        },
        "P2909": {
            "title": "SecondHandSongs artist ID",
            "type": "External identifier"
        },
        "P291": {
            "title": "place of publication",
            "type": "Item"
        },
        "P2910": {
            "title": "icon",
            "type": "Commons media file"
        },
        "P2911": {
            "title": "time gap",
            "type": "Quantity"
        },
        "P2912": {
            "title": "distinctive jersey",
            "type": "Item"
        },
        "P2913": {
            "title": "date depicted",
            "type": "Point in time"
        },
        "P2914": {
            "title": "MSBI person ID",
            "type": "External identifier"
        },
        "P2915": {
            "title": "ECARTICO person ID",
            "type": "External identifier"
        },
        "P2916": {
            "title": "syntax clarification",
            "type": "Monolingual text"
        },
        "P2917": {
            "title": "COAM structure ID",
            "type": "External identifier"
        },
        "P2918": {
            "title": "PO Box",
            "type": "String"
        },
        "P2919": {
            "title": "label in sign language",
            "type": "Commons media file"
        },
        "P2922": {
            "title": "month of the year",
            "type": "Item"
        },
        "P2923": {
            "title": "focal height",
            "type": "Quantity"
        },
        "P2924": {
            "title": "Great Russian Encyclopedia Online ID",
            "type": "External identifier"
        },
        "P2925": {
            "title": "domain of saint or deity",
            "type": "Item"
        },
        "P2926": {
            "title": "InterPro ID",
            "type": "External identifier"
        },
        "P2927": {
            "title": "water as percent of area",
            "type": "Quantity"
        },
        "P2928": {
            "title": "memory capacity",
            "type": "Quantity"
        },
        "P2929": {
            "title": "lighthouse range",
            "type": "Quantity"
        },
        "P2930": {
            "title": "INSPIRE-HEP author ID",
            "type": "External identifier"
        },
        "P2931": {
            "title": "Encyclopedia of Triangle Centers identifier",
            "type": "External identifier"
        },
        "P2935": {
            "title": "connector",
            "type": "Item"
        },
        "P2936": {
            "title": "language used",
            "type": "Item"
        },
        "P2937": {
            "title": "parliamentary term",
            "type": "Item"
        },
        "P2938": {
            "title": "Pleiades place type identifier",
            "type": "External identifier"
        },
        "P2939": {
            "title": "CageMatch tag team ID",
            "type": "External identifier"
        },
        "P2940": {
            "title": "Catalogus Professorum Rostochiensium ID",
            "type": "External identifier"
        },
        "P2941": {
            "title": "Munk's Roll ID",
            "type": "External identifier"
        },
        "P2942": {
            "title": "Dailymotion channel ID",
            "type": "External identifier"
        },
        "P2943": {
            "title": "warheroes.ru ID",
            "type": "External identifier"
        },
        "P2944": {
            "title": "Plarr ID",
            "type": "External identifier"
        },
        "P2945": {
            "title": "British Book Trade Index ID",
            "type": "External identifier"
        },
        "P2946": {
            "title": "BacDive ID",
            "type": "External identifier"
        },
        "P2948": {
            "title": "Estonian cultural monument ID",
            "type": "External identifier"
        },
        "P2949": {
            "title": "WikiTree person ID",
            "type": "External identifier"
        },
        "P2950": {
            "title": "Nomisma ID",
            "type": "External identifier"
        },
        "P2951": {
            "title": "Cultural heritage database in Austria ObjektID",
            "type": "External identifier"
        },
        "P2952": {
            "title": "boat of heritage interest ID",
            "type": "External identifier"
        },
        "P2953": {
            "title": "Estonian Research Portal person ID",
            "type": "External identifier"
        },
        "P2954": {
            "title": "Transferred Account Data Interchange Group Code",
            "type": "External identifier"
        },
        "P2955": {
            "title": "point of penalty",
            "type": "Quantity"
        },
        "P2956": {
            "title": "NAIF ID",
            "type": "External identifier"
        },
        "P2957": {
            "title": "throughput",
            "type": "Quantity"
        },
        "P2959": {
            "title": "permanent duplicated item",
            "type": "Item"
        },
        "P296": {
            "title": "station code",
            "type": "String"
        },
        "P2960": {
            "title": "archive date",
            "type": "Point in time"
        },
        "P2961": {
            "title": "BVPH ID",
            "type": "External identifier"
        },
        "P2962": {
            "title": "title of chess player",
            "type": "Item"
        },
        "P2963": {
            "title": "Goodreads author ID",
            "type": "External identifier"
        },
        "P2964": {
            "title": "right to vote",
            "type": "Item"
        },
        "P2965": {
            "title": "EU River Basin District code",
            "type": "External identifier"
        },
        "P2966": {
            "title": "National Library of Wales ID",
            "type": "External identifier"
        },
        "P2967": {
            "title": "Queensland Heritage Register ID",
            "type": "External identifier"
        },
        "P2968": {
            "title": "QUDT unit ID",
            "type": "External identifier"
        },
        "P2969": {
            "title": "Goodreads book ID",
            "type": "External identifier"
        },
        "P297": {
            "title": "ISO 3166-1 alpha-2 code",
            "type": "External identifier"
        },
        "P2970": {
            "title": "Kinopolis film ID",
            "type": "External identifier"
        },
        "P2971": {
            "title": "GCatholic church ID",
            "type": "External identifier"
        },
        "P2972": {
            "title": "SNAP ID",
            "type": "External identifier"
        },
        "P2973": {
            "title": "Spenserians person ID",
            "type": "External identifier"
        },
        "P2974": {
            "title": "habitat",
            "type": "Item"
        },
        "P2975": {
            "title": "host",
            "type": "Item"
        },
        "P2976": {
            "title": "patronym or matronym for this name",
            "type": "Item"
        },
        "P2977": {
            "title": "LBT person ID",
            "type": "External identifier"
        },
        "P2978": {
            "title": "wheel arrangement",
            "type": "Item"
        },
        "P2979": {
            "title": "maritime identification digits",
            "type": "String"
        },
        "P298": {
            "title": "ISO 3166-1 alpha-3 code",
            "type": "External identifier"
        },
        "P2980": {
            "title": "ARLHS Lighthouse ID",
            "type": "External identifier"
        },
        "P2981": {
            "title": "UIC alphabetical country code",
            "type": "External identifier"
        },
        "P2982": {
            "title": "UIC numerical country code",
            "type": "External identifier"
        },
        "P2983": {
            "title": "UNDP country code",
            "type": "External identifier"
        },
        "P2984": {
            "title": "Snapchat username",
            "type": "External identifier"
        },
        "P2985": {
            "title": "DSBE ID",
            "type": "External identifier"
        },
        "P2986": {
            "title": "aircraft registration prefix",
            "type": "External identifier"
        },
        "P2987": {
            "title": "Taekwondo Data ID",
            "type": "External identifier"
        },
        "P2988": {
            "title": "GOST 7.67 cyrillic",
            "type": "External identifier"
        },
        "P2989": {
            "title": "has grammatical case",
            "type": "Item"
        },
        "P299": {
            "title": "ISO 3166-1 numeric code",
            "type": "External identifier"
        },
        "P2990": {
            "title": "FIL ID",
            "type": "External identifier"
        },
        "P2991": {
            "title": "IBSF ID",
            "type": "External identifier"
        },
        "P2992": {
            "title": "software quality assurance",
            "type": "Item"
        },
        "P2993": {
            "title": "partition coefficient water/octanol",
            "type": "Quantity"
        },
        "P2997": {
            "title": "age of majority",
            "type": "Quantity"
        },
        "P2998": {
            "title": "age of candidacy",
            "type": "Quantity"
        },
        "P2999": {
            "title": "age of consent",
            "type": "Quantity"
        },
        "P30": {
            "title": "continent",
            "type": "Item"
        },
        "P300": {
            "title": "ISO 3166-2 code",
            "type": "External identifier"
        },
        "P3000": {
            "title": "marriageable age",
            "type": "Quantity"
        },
        "P3001": {
            "title": "retirement age",
            "type": "Quantity"
        },
        "P3002": {
            "title": "Untappd brewery ID",
            "type": "External identifier"
        },
        "P3003": {
            "title": "zanikleobce.cz abandoned objects ID",
            "type": "External identifier"
        },
        "P3004": {
            "title": "Galiciana work ID",
            "type": "External identifier"
        },
        "P3005": {
            "title": "valid in place",
            "type": "Item"
        },
        "P3006": {
            "title": "Marine Regions Geographic ID",
            "type": "External identifier"
        },
        "P3007": {
            "title": "Cadw Monument ID",
            "type": "External identifier"
        },
        "P3008": {
            "title": "Australian Heritage Database Place ID",
            "type": "External identifier"
        },
        "P3009": {
            "title": "Conservatoire du littoral ID",
            "type": "External identifier"
        },
        "P301": {
            "title": "category's main topic",
            "type": "Item"
        },
        "P3010": {
            "title": "World Archery athlete ID",
            "type": "External identifier"
        },
        "P3012": {
            "title": "Statistics Canada Geographic code",
            "type": "External identifier"
        },
        "P3013": {
            "title": "surface tension",
            "type": "Quantity"
        },
        "P3014": {
            "title": "laws applied",
            "type": "Item"
        },
        "P3015": {
            "title": "backup or reserve team or crew",
            "type": "Item"
        },
        "P3016": {
            "title": "French national research structure identifier",
            "type": "External identifier"
        },
        "P3017": {
            "title": "Rolling Stone artist ID",
            "type": "External identifier"
        },
        "P3018": {
            "title": "located in protected area",
            "type": "Item"
        },
        "P3019": {
            "title": "railway signalling system",
            "type": "Item"
        },
        "P3020": {
            "title": "residence time of water",
            "type": "Quantity"
        },
        "P3021": {
            "title": "Iranica ID",
            "type": "External identifier"
        },
        "P3022": {
            "title": "flag bearer",
            "type": "Item"
        },
        "P3023": {
            "title": "Legacies of British Slave-ownership person ID",
            "type": "External identifier"
        },
        "P3024": {
            "title": "ITU letter code",
            "type": "External identifier"
        },
        "P3025": {
            "title": "open days",
            "type": "Item"
        },
        "P3026": {
            "title": "closed on",
            "type": "Item"
        },
        "P3027": {
            "title": "open period from",
            "type": "Item"
        },
        "P3028": {
            "title": "open period to",
            "type": "Item"
        },
        "P3029": {
            "title": "UK National Archives ID",
            "type": "External identifier"
        },
        "P303": {
            "title": "EE breed number",
            "type": "External identifier"
        },
        "P3030": {
            "title": "sheet music",
            "type": "Commons media file"
        },
        "P3031": {
            "title": "EPPO Code",
            "type": "External identifier"
        },
        "P3032": {
            "title": "adjacent building",
            "type": "Item"
        },
        "P3033": {
            "title": "package management system",
            "type": "Item"
        },
        "P3034": {
            "title": "Indonesian ethnicity code",
            "type": "External identifier"
        },
        "P3035": {
            "title": "ISBN publisher prefix",
            "type": "External identifier"
        },
        "P3036": {
            "title": "precipitation height",
            "type": "Quantity"
        },
        "P3037": {
            "title": "spatial reference system",
            "type": "Item"
        },
        "P3038": {
            "title": "IWM memorial ID",
            "type": "External identifier"
        },
        "P3039": {
            "title": "wheelbase",
            "type": "Quantity"
        },
        "P304": {
            "title": "page(s)",
            "type": "String"
        },
        "P3040": {
            "title": "SoundCloud ID",
            "type": "External identifier"
        },
        "P3041": {
            "title": "luminous intensity",
            "type": "Quantity"
        },
        "P3042": {
            "title": "CageMatch wrestling stable id",
            "type": "External identifier"
        },
        "P3043": {
            "title": "Scoresway soccer person ID",
            "type": "External identifier"
        },
        "P3044": {
            "title": "College Football HoF ID",
            "type": "External identifier"
        },
        "P3045": {
            "title": "HanCinema person ID",
            "type": "External identifier"
        },
        "P3046": {
            "title": "ForaDeJogo player ID",
            "type": "External identifier"
        },
        "P3047": {
            "title": "TheFinalBall player ID",
            "type": "External identifier"
        },
        "P3048": {
            "title": "racing-reference driver ID",
            "type": "External identifier"
        },
        "P3049": {
            "title": "Scottish Football Association player ID",
            "type": "External identifier"
        },
        "P305": {
            "title": "IETF language tag",
            "type": "External identifier"
        },
        "P3050": {
            "title": "FACR player ID",
            "type": "External identifier"
        },
        "P3051": {
            "title": "Kindred Britain ID",
            "type": "External identifier"
        },
        "P3052": {
            "title": "Bloomberg person ID",
            "type": "External identifier"
        },
        "P3053": {
            "title": "K League player ID",
            "type": "External identifier"
        },
        "P3054": {
            "title": "Ontario MPP ID",
            "type": "External identifier"
        },
        "P3055": {
            "title": "NAQ elected person ID",
            "type": "External identifier"
        },
        "P3056": {
            "title": "Turner Classic Movies person ID",
            "type": "External identifier"
        },
        "P3057": {
            "title": "Charity Commission no.",
            "type": "External identifier"
        },
        "P3058": {
            "title": "Architectuurgids architect ID",
            "type": "External identifier"
        },
        "P3059": {
            "title": "Architectuurgids building ID",
            "type": "External identifier"
        },
        "P306": {
            "title": "operating system",
            "type": "Item"
        },
        "P3060": {
            "title": "ButMoth ID",
            "type": "External identifier"
        },
        "P3061": {
            "title": "Basisregistratie Instellingen number",
            "type": "External identifier"
        },
        "P3063": {
            "title": "gestation period",
            "type": "Quantity"
        },
        "P3064": {
            "title": "LepIndex ID",
            "type": "External identifier"
        },
        "P3065": {
            "title": "RERO ID",
            "type": "External identifier"
        },
        "P3066": {
            "title": "GLAM Identifier",
            "type": "External identifier"
        },
        "P3067": {
            "title": "GS1 country code",
            "type": "String"
        },
        "P3068": {
            "title": "WIPO ST.3",
            "type": "External identifier"
        },
        "P3069": {
            "title": "UN document symbol",
            "type": "External identifier"
        },
        "P3070": {
            "title": "dynamic viscosity",
            "type": "Quantity"
        },
        "P3071": {
            "title": "standard molar entropy",
            "type": "Quantity"
        },
        "P3072": {
            "title": "Storting person ID",
            "type": "External identifier"
        },
        "P3073": {
            "title": "CosIng number",
            "type": "External identifier"
        },
        "P3074": {
            "title": "Grace's Guide ID",
            "type": "External identifier"
        },
        "P3075": {
            "title": "official religion",
            "type": "Item"
        },
        "P3076": {
            "title": "Open Beauty Facts category ID",
            "type": "External identifier"
        },
        "P3077": {
            "title": "Cineplex film ID",
            "type": "External identifier"
        },
        "P3078": {
            "title": "standard enthalpy of formation",
            "type": "Quantity"
        },
        "P3080": {
            "title": "game artist",
            "type": "Item"
        },
        "P3081": {
            "title": "damaged",
            "type": "Item"
        },
        "P3082": {
            "title": "destroyed",
            "type": "Item"
        },
        "P3083": {
            "title": "SIMBAD ID",
            "type": "External identifier"
        },
        "P3085": {
            "title": "qualifies for event",
            "type": "Item"
        },
        "P3086": {
            "title": "speed limit",
            "type": "Quantity"
        },
        "P3087": {
            "title": "fiscal/tax revenue",
            "type": "Quantity"
        },
        "P3088": {
            "title": "Catalogue of Life in Taiwan ID",
            "type": "External identifier"
        },
        "P3089": {
            "title": "Flags of the World ID",
            "type": "External identifier"
        },
        "P3090": {
            "title": "flight number",
            "type": "String"
        },
        "P3091": {
            "title": "mount",
            "type": "Item"
        },
        "P3092": {
            "title": "film crew member",
            "type": "Item"
        },
        "P3093": {
            "title": "recovered by",
            "type": "Item"
        },
        "P3094": {
            "title": "develops from",
            "type": "Item"
        },
        "P3095": {
            "title": "practiced by",
            "type": "Item"
        },
        "P3096": {
            "title": "KML file",
            "type": "Item"
        },
        "P3097": {
            "title": "ISBN identifier group",
            "type": "External identifier"
        },
        "P3098": {
            "title": "ClinicalTrials.gov Identifier",
            "type": "External identifier"
        },
        "P3099": {
            "title": "Internet Bird Collection species ID",
            "type": "External identifier"
        },
        "P31": {
            "title": "instance of",
            "type": "Item"
        },
        "P3100": {
            "title": "Flora of Australia ID",
            "type": "External identifier"
        },
        "P3101": {
            "title": "FloraBase ID",
            "type": "External identifier"
        },
        "P3102": {
            "title": "Plantarium ID",
            "type": "External identifier"
        },
        "P3103": {
            "title": "has tense",
            "type": "Item"
        },
        "P3104": {
            "title": "Gares & Connexions ID",
            "type": "External identifier"
        },
        "P3105": {
            "title": "Tela Botanica ID",
            "type": "External identifier"
        },
        "P3106": {
            "title": "Guardian topic ID",
            "type": "External identifier"
        },
        "P3107": {
            "title": "LdiF ID",
            "type": "External identifier"
        },
        "P3108": {
            "title": "Yelp ID",
            "type": "External identifier"
        },
        "P3109": {
            "title": "Peakbagger mountain ID",
            "type": "External identifier"
        },
        "P3110": {
            "title": "ISzDb film ID",
            "type": "External identifier"
        },
        "P3111": {
            "title": "FEI ID",
            "type": "External identifier"
        },
        "P3112": {
            "title": "DistroWatch ID",
            "type": "External identifier"
        },
        "P3113": {
            "title": "does not have part",
            "type": "Item"
        },
        "P3114": {
            "title": "ISzDb person ID",
            "type": "External identifier"
        },
        "P3115": {
            "title": "ISzDb company ID",
            "type": "External identifier"
        },
        "P3116": {
            "title": "ISzDb dub ID",
            "type": "External identifier"
        },
        "P3117": {
            "title": "DSSTOX substance identifier",
            "type": "External identifier"
        },
        "P3118": {
            "title": "OpenDomesday settlement ID",
            "type": "External identifier"
        },
        "P3119": {
            "title": "Code for China Reservoir Name",
            "type": "External identifier"
        },
        "P3120": {
            "title": "TOID",
            "type": "External identifier"
        },
        "P3121": {
            "title": "Epguides ID",
            "type": "External identifier"
        },
        "P3122": {
            "title": "OpenDomesday person ID",
            "type": "External identifier"
        },
        "P3123": {
            "title": "Stanford Encyclopedia of Philosophy ID",
            "type": "External identifier"
        },
        "P3124": {
            "title": "Polish scientist ID",
            "type": "External identifier"
        },
        "P3125": {
            "title": "EDRPOU code",
            "type": "External identifier"
        },
        "P3126": {
            "title": "ALCUIN ID",
            "type": "External identifier"
        },
        "P3127": {
            "title": "Latindex ID",
            "type": "External identifier"
        },
        "P3128": {
            "title": "CiNetMag film ID",
            "type": "External identifier"
        },
        "P3129": {
            "title": "cine.gr film ID",
            "type": "External identifier"
        },
        "P3130": {
            "title": "NSW Flora ID",
            "type": "External identifier"
        },
        "P3131": {
            "title": "Redalyc journal ID",
            "type": "External identifier"
        },
        "P3132": {
            "title": "last line",
            "type": "Monolingual text"
        },
        "P3133": {
            "title": "NSZL name authority ID",
            "type": "External identifier"
        },
        "P3134": {
            "title": "TripAdvisor ID",
            "type": "External identifier"
        },
        "P3135": {
            "title": "elCinema film ID",
            "type": "External identifier"
        },
        "P3136": {
            "title": "elCinema person ID",
            "type": "External identifier"
        },
        "P3137": {
            "title": "parent peak",
            "type": "Item"
        },
        "P3138": {
            "title": "OFDb ID",
            "type": "External identifier"
        },
        "P3139": {
            "title": "SourehCinema film ID",
            "type": "External identifier"
        },
        "P3140": {
            "title": "SourehCinema person ID",
            "type": "External identifier"
        },
        "P3141": {
            "title": "EDb film ID",
            "type": "External identifier"
        },
        "P3142": {
            "title": "EDb person ID",
            "type": "External identifier"
        },
        "P3143": {
            "title": "elFilm film ID",
            "type": "External identifier"
        },
        "P3144": {
            "title": "elFilm person ID",
            "type": "External identifier"
        },
        "P3145": {
            "title": "Sratim ID",
            "type": "External identifier"
        },
        "P3146": {
            "title": "CiNetMag person ID",
            "type": "External identifier"
        },
        "P3147": {
            "title": "United States Reports ID",
            "type": "External identifier"
        },
        "P3148": {
            "title": "repeals",
            "type": "Item"
        },
        "P3149": {
            "title": "molecule conformation",
            "type": "Item"
        },
        "P3150": {
            "title": "birthday",
            "type": "Item"
        },
        "P3151": {
            "title": "iNaturalist taxon ID",
            "type": "External identifier"
        },
        "P3152": {
            "title": "Findsmiley ID",
            "type": "External identifier"
        },
        "P3153": {
            "title": "Crossref funder ID",
            "type": "External identifier"
        },
        "P3154": {
            "title": "Runeberg author ID",
            "type": "External identifier"
        },
        "P3155": {
            "title": "Runeberg book ID",
            "type": "External identifier"
        },
        "P3156": {
            "title": "Australian Classification",
            "type": "Item"
        },
        "P3157": {
            "title": "event distance",
            "type": "Quantity"
        },
        "P3158": {
            "title": "enclosure",
            "type": "Item"
        },
        "P3159": {
            "title": "UGentMemorialis ID",
            "type": "External identifier"
        },
        "P3160": {
            "title": "Minnesota legislator ID",
            "type": "External identifier"
        },
        "P3161": {
            "title": "has grammatical mood",
            "type": "Item"
        },
        "P3162": {
            "title": "Rock Hall of Fame ID",
            "type": "External identifier"
        },
        "P3163": {
            "title": "Scottish Charity number",
            "type": "External identifier"
        },
        "P3165": {
            "title": "Horsetelex ID",
            "type": "External identifier"
        },
        "P3166": {
            "title": "Webpedigrees ID",
            "type": "External identifier"
        },
        "P3167": {
            "title": "Allbreedpedigree ID",
            "type": "External identifier"
        },
        "P3168": {
            "title": "Sporthorse data ID",
            "type": "External identifier"
        },
        "P3169": {
            "title": "Harasire ID",
            "type": "External identifier"
        },
        "P3170": {
            "title": "Cultural Heritage Armenia ID",
            "type": "External identifier"
        },
        "P3171": {
            "title": "International Olympic Committee athlete ID",
            "type": "External identifier"
        },
        "P3172": {
            "title": "World Bridge Federation ID",
            "type": "External identifier"
        },
        "P3173": {
            "title": "offers view on",
            "type": "Item"
        },
        "P3174": {
            "title": "art director",
            "type": "Item"
        },
        "P3175": {
            "title": "Statoids ID",
            "type": "External identifier"
        },
        "P3176": {
            "title": "uses property",
            "type": "Property"
        },
        "P3177": {
            "title": "Patrimonio Web JCyL ID",
            "type": "External identifier"
        },
        "P3178": {
            "title": "Zaragoza monument ID",
            "type": "External identifier"
        },
        "P3179": {
            "title": "territory overlaps",
            "type": "Item"
        },
        "P3180": {
            "title": "Visual Novel Database ID",
            "type": "External identifier"
        },
        "P3181": {
            "title": "OpenCitations bibliographic resource ID",
            "type": "External identifier"
        },
        "P3182": {
            "title": "FANTOIR code",
            "type": "External identifier"
        },
        "P3183": {
            "title": "WSJ topic ID",
            "type": "External identifier"
        },
        "P3184": {
            "title": "Czech National Bibliography book ID",
            "type": "External identifier"
        },
        "P3185": {
            "title": "VKontakte username",
            "type": "External identifier"
        },
        "P3186": {
            "title": "TAXREF ID",
            "type": "External identifier"
        },
        "P3187": {
            "title": "Marburger Professorenkatalog ID",
            "type": "External identifier"
        },
        "P3188": {
            "title": "Nobel prize ID",
            "type": "External identifier"
        },
        "P3189": {
            "title": "innervated by",
            "type": "Item"
        },
        "P3190": {
            "title": "innervates",
            "type": "Item"
        },
        "P3191": {
            "title": "IMIS person ID",
            "type": "External identifier"
        },
        "P3192": {
            "title": "Last.fm music ID",
            "type": "External identifier"
        },
        "P3193": {
            "title": "GS1 Manufacturer code",
            "type": "External identifier"
        },
        "P3194": {
            "title": "INA video ID",
            "type": "External identifier"
        },
        "P3195": {
            "title": "league points system",
            "type": "Item"
        },
        "P3196": {
            "title": "USGS earthquake id",
            "type": "External identifier"
        },
        "P3197": {
            "title": "Federal Heritage Buildings ID (Canada)",
            "type": "External identifier"
        },
        "P3198": {
            "title": "JewishGen Locality ID",
            "type": "External identifier"
        },
        "P3199": {
            "title": "charity number (Isle of Man)",
            "type": "External identifier"
        },
        "P3200": {
            "title": "Northern Ireland charity number",
            "type": "External identifier"
        },
        "P3201": {
            "title": "Medical Dictionary for Regulatory Activities ID",
            "type": "External identifier"
        },
        "P3202": {
            "title": "UAI code",
            "type": "External identifier"
        },
        "P3203": {
            "title": "Cin\u00e9-Ressources film ID",
            "type": "External identifier"
        },
        "P3204": {
            "title": "Cin\u00e9-Ressources person ID",
            "type": "External identifier"
        },
        "P3205": {
            "title": "patient of",
            "type": "Item"
        },
        "P3206": {
            "title": "data.gouv.fr ID",
            "type": "External identifier"
        },
        "P3207": {
            "title": "Vine user ID",
            "type": "External identifier"
        },
        "P3208": {
            "title": "New General Catalogue ID",
            "type": "External identifier"
        },
        "P3209": {
            "title": "Heritage Railway Station of Canada ID",
            "type": "External identifier"
        },
        "P3211": {
            "title": "Heritage Lighthouse of Canada ID",
            "type": "External identifier"
        },
        "P3212": {
            "title": "International Standard Audiovisual Number",
            "type": "External identifier"
        },
        "P3213": {
            "title": "Indian census area code",
            "type": "External identifier"
        },
        "P3215": {
            "title": "FR SIRET number",
            "type": "External identifier"
        },
        "P3216": {
            "title": "ClassInd rating",
            "type": "Item"
        },
        "P3217": {
            "title": "Dictionary of Swedish National Biography",
            "type": "External identifier"
        },
        "P3218": {
            "title": "Au\u00f1amendi ID",
            "type": "External identifier"
        },
        "P3219": {
            "title": "Encyclop\u00e6dia Universalis Online ID",
            "type": "External identifier"
        },
        "P3220": {
            "title": "KvK company ID",
            "type": "External identifier"
        },
        "P3221": {
            "title": "NYT topic ID",
            "type": "External identifier"
        },
        "P3222": {
            "title": "NE.se ID",
            "type": "External identifier"
        },
        "P3223": {
            "title": "Online List of Lights id",
            "type": "External identifier"
        },
        "P3224": {
            "title": "NAICS code",
            "type": "External identifier"
        },
        "P3225": {
            "title": "Corporate Number (Japan)",
            "type": "External identifier"
        },
        "P3226": {
            "title": "HAS member ID",
            "type": "External identifier"
        },
        "P3227": {
            "title": "Cultural Heritage Kosovo ID",
            "type": "External identifier"
        },
        "P3228": {
            "title": "Schl\u00e4fli symbol",
            "type": "String"
        },
        "P3229": {
            "title": "South Dakota legislator ID",
            "type": "External identifier"
        },
        "P3230": {
            "title": "SCAR Composite Gazetteer place ID",
            "type": "External identifier"
        },
        "P3231": {
            "title": "Mediaarts-DB ID",
            "type": "External identifier"
        },
        "P3232": {
            "title": "PhilPapers author ID",
            "type": "External identifier"
        },
        "P3233": {
            "title": "PhilPapers profile",
            "type": "External identifier"
        },
        "P3234": {
            "title": "Library of Congress Cultural Heritage Organizations",
            "type": "External identifier"
        },
        "P3235": {
            "title": "PhilPapers topic",
            "type": "External identifier"
        },
        "P3236": {
            "title": "PhilPapers publication ID",
            "type": "External identifier"
        },
        "P3237": {
            "title": "KU Leuven person ID",
            "type": "External identifier"
        },
        "P3238": {
            "title": "trunk prefix",
            "type": "String"
        },
        "P3240": {
            "title": "NBN System Key",
            "type": "External identifier"
        },
        "P3241": {
            "title": "Catholic Encyclopedia ID",
            "type": "External identifier"
        },
        "P3242": {
            "title": "SIC code",
            "type": "External identifier"
        },
        "P3243": {
            "title": "OKVED 1.1 code of the economic activity",
            "type": "External identifier"
        },
        "P3245": {
            "title": "OKPD code of the good or service",
            "type": "External identifier"
        },
        "P3246": {
            "title": "OKVED 2 code of the economic activity",
            "type": "External identifier"
        },
        "P3248": {
            "title": "OKP ID of the good or service",
            "type": "External identifier"
        },
        "P3250": {
            "title": "OKPD2 code of the good or service",
            "type": "External identifier"
        },
        "P3251": {
            "title": "minimum viable temperature",
            "type": "Quantity"
        },
        "P3252": {
            "title": "maximum viable temperature",
            "type": "Quantity"
        },
        "P3253": {
            "title": "optimum viable temperature",
            "type": "Quantity"
        },
        "P3254": {
            "title": "property proposal discussion",
            "type": "URL"
        },
        "P3256": {
            "title": "Cave E-Cadastre ID",
            "type": "External identifier"
        },
        "P3257": {
            "title": "Queensland place ID",
            "type": "External identifier"
        },
        "P3258": {
            "title": "LiveJournal ID",
            "type": "External identifier"
        },
        "P3259": {
            "title": "intangible cultural heritage status",
            "type": "Item"
        },
        "P3260": {
            "title": "points awarded",
            "type": "Quantity"
        },
        "P3261": {
            "title": "anatomical branch of",
            "type": "Item"
        },
        "P3262": {
            "title": "has anatomical branch",
            "type": "Item"
        },
        "P3263": {
            "title": "base",
            "type": "Item"
        },
        "P3264": {
            "title": "radix",
            "type": "Item"
        },
        "P3265": {
            "title": "Myspace ID",
            "type": "External identifier"
        },
        "P3266": {
            "title": "LocFDD ID",
            "type": "External identifier"
        },
        "P3267": {
            "title": "Flickr user ID",
            "type": "External identifier"
        },
        "P3268": {
            "title": "PORT organization URL",
            "type": "URL"
        },
        "P3269": {
            "title": "Fotografen.nl ID",
            "type": "External identifier"
        },
        "P3270": {
            "title": "compulsory education (minimum age)",
            "type": "Quantity"
        },
        "P3271": {
            "title": "compulsory education (maximum age)",
            "type": "Quantity"
        },
        "P3272": {
            "title": "Zeri image ID",
            "type": "External identifier"
        },
        "P3273": {
            "title": "Actorenregister ID",
            "type": "External identifier"
        },
        "P3274": {
            "title": "content deliverer",
            "type": "Item"
        },
        "P3275": {
            "title": "storyboard artist",
            "type": "Item"
        },
        "P3276": {
            "title": "Angel List ID",
            "type": "External identifier"
        },
        "P3277": {
            "title": "KANTL member ID",
            "type": "External identifier"
        },
        "P3279": {
            "title": "statistical leader",
            "type": "Item"
        },
        "P3280": {
            "title": "BanQ author ID",
            "type": "External identifier"
        },
        "P3281": {
            "title": "French National Assembly Lobbyist ID",
            "type": "External identifier"
        },
        "P3283": {
            "title": "Bandcamp artist ID",
            "type": "External identifier"
        },
        "P3284": {
            "title": "Yahoo! Japan Talent Database ID",
            "type": "External identifier"
        },
        "P3285": {
            "title": "Mathematics Subject Classification ID",
            "type": "External identifier"
        },
        "P3286": {
            "title": "Squash Info ID",
            "type": "External identifier"
        },
        "P3288": {
            "title": "World Spider Catalog ID",
            "type": "External identifier"
        },
        "P3289": {
            "title": "Cellosaurus ID",
            "type": "External identifier"
        },
        "P3290": {
            "title": "biography at the Landtag of Mecklenburg-Vorpommern",
            "type": "External identifier"
        },
        "P3291": {
            "title": "DocCheck Flexikon En ID",
            "type": "External identifier"
        },
        "P3292": {
            "title": "DocCheck Flexikon De ID",
            "type": "External identifier"
        },
        "P3293": {
            "title": "BALaT image ID",
            "type": "External identifier"
        },
        "P3294": {
            "title": "encoding",
            "type": "Item"
        },
        "P3295": {
            "title": "code",
            "type": "String"
        },
        "P3296": {
            "title": "DR\u00daSOP ID",
            "type": "External identifier"
        },
        "P3297": {
            "title": "Flemish Parliament person ID",
            "type": "External identifier"
        },
        "P3298": {
            "title": "Belgian Senate person ID",
            "type": "External identifier"
        },
        "P3299": {
            "title": "student register of the University of Helsinki ID (1640\u20131852)",
            "type": "External identifier"
        },
        "P3300": {
            "title": "musical conductor",
            "type": "Item"
        },
        "P3301": {
            "title": "broadcast by",
            "type": "Item"
        },
        "P3302": {
            "title": "Open Media Database film ID",
            "type": "External identifier"
        },
        "P3303": {
            "title": "third-party formatter URL",
            "type": "String"
        },
        "P3304": {
            "title": "NGS pumping station ID",
            "type": "External identifier"
        },
        "P3305": {
            "title": "KINENOTE person ID",
            "type": "External identifier"
        },
        "P3306": {
            "title": "ICAA rating",
            "type": "Item"
        },
        "P3307": {
            "title": "Galiciana Author ID",
            "type": "External identifier"
        },
        "P3308": {
            "title": "lib.reviews ID",
            "type": "External identifier"
        },
        "P3309": {
            "title": "SummitPost mountain ID",
            "type": "External identifier"
        },
        "P3310": {
            "title": "muscle action",
            "type": "Item"
        },
        "P3311": {
            "title": "plan image",
            "type": "Commons media file"
        },
        "P3314": {
            "title": "365chess player ID",
            "type": "External identifier"
        },
        "P3315": {
            "title": "chesstempo ID",
            "type": "External identifier"
        },
        "P3316": {
            "title": "ICCF player ID",
            "type": "External identifier"
        },
        "P3318": {
            "title": "Patrimonio Inmueble de Andaluc\u00eda ID",
            "type": "External identifier"
        },
        "P3320": {
            "title": "board member",
            "type": "Item"
        },
        "P3321": {
            "title": "male form of label",
            "type": "Monolingual text"
        },
        "P3322": {
            "title": "Vlinderstichting-ID",
            "type": "External identifier"
        },
        "P3323": {
            "title": "opponent during disputation",
            "type": "Item"
        },
        "P3324": {
            "title": "petit-patrimoine.com ID",
            "type": "External identifier"
        },
        "P3325": {
            "title": "student register of the University of Helsinki ID (1853\u20131899)",
            "type": "External identifier"
        },
        "P3326": {
            "title": "World Waterfall Database ID",
            "type": "External identifier"
        },
        "P3327": {
            "title": "R\u00e9serves naturelles de France ID",
            "type": "External identifier"
        },
        "P3328": {
            "title": "wurvoc.org measure ID",
            "type": "External identifier"
        },
        "P3329": {
            "title": "CIViC variant ID",
            "type": "External identifier"
        },
        "P3330": {
            "title": "Supermodels.nl ID",
            "type": "External identifier"
        },
        "P3331": {
            "title": "HGVS nomenclature",
            "type": "External identifier"
        },
        "P3332": {
            "title": "ACM Digital Library citation ID",
            "type": "External identifier"
        },
        "P3333": {
            "title": "ACM Digital Library event ID",
            "type": "External identifier"
        },
        "P3335": {
            "title": "hazard on site",
            "type": "Item"
        },
        "P3337": {
            "title": "generation time",
            "type": "Quantity"
        },
        "P3338": {
            "title": "Encyclopedia of Surfing ID",
            "type": "External identifier"
        },
        "P3339": {
            "title": "World Surf League ID",
            "type": "External identifier"
        },
        "P3340": {
            "title": "Kvikmyndir film ID",
            "type": "External identifier"
        },
        "P3341": {
            "title": "Kvikmyndir person ID",
            "type": "External identifier"
        },
        "P3342": {
            "title": "significant person",
            "type": "Item"
        },
        "P3343": {
            "title": "legislation.gov.uk ID",
            "type": "External identifier"
        },
        "P3344": {
            "title": "Vote Smart ID",
            "type": "External identifier"
        },
        "P3345": {
            "title": "RxNorm CUI",
            "type": "External identifier"
        },
        "P3346": {
            "title": "HKMDb person ID",
            "type": "External identifier"
        },
        "P3347": {
            "title": "PermID",
            "type": "External identifier"
        },
        "P3348": {
            "title": "National Library of Greece ID",
            "type": "External identifier"
        },
        "P3349": {
            "title": "designed to carry",
            "type": "Item"
        },
        "P3350": {
            "title": "WHO international non-proprietary names ID",
            "type": "External identifier"
        },
        "P3351": {
            "title": "Adult Film Database person ID",
            "type": "External identifier"
        },
        "P3352": {
            "title": "musipedia tune ID",
            "type": "External identifier"
        },
        "P3353": {
            "title": "National Recreation Trails Database ID",
            "type": "External identifier"
        },
        "P3354": {
            "title": "positive therapeutic predictor",
            "type": "Item"
        },
        "P3355": {
            "title": "negative therapeutic predictor",
            "type": "Item"
        },
        "P3356": {
            "title": "positive diagnostic predictor",
            "type": "Item"
        },
        "P3357": {
            "title": "negative diagnostic predictor",
            "type": "Item"
        },
        "P3358": {
            "title": "positive prognostic predictor",
            "type": "Item"
        },
        "P3359": {
            "title": "negative prognostic predictor",
            "type": "Item"
        },
        "P3360": {
            "title": "Nobel Prize People Nomination ID",
            "type": "External identifier"
        },
        "P3361": {
            "title": "PictoRight ID code",
            "type": "External identifier"
        },
        "P3362": {
            "title": "operating income",
            "type": "Quantity"
        },
        "P3363": {
            "title": "Tennis HoF player ID",
            "type": "External identifier"
        },
        "P3364": {
            "title": "stereoisomer of",
            "type": "Item"
        },
        "P3365": {
            "title": "Treccani ID",
            "type": "External identifier"
        },
        "P3366": {
            "title": "GECD person ID",
            "type": "External identifier"
        },
        "P3367": {
            "title": "GECD film ID",
            "type": "External identifier"
        },
        "P3368": {
            "title": "Prabook ID",
            "type": "External identifier"
        },
        "P3370": {
            "title": "G\u00e9opatronyme ID",
            "type": "External identifier"
        },
        "P3371": {
            "title": "Observatoire du Patrimoine Religieux ID",
            "type": "External identifier"
        },
        "P3372": {
            "title": "Auckland Art Gallery artist ID",
            "type": "External identifier"
        },
        "P3373": {
            "title": "sibling",
            "type": "Item"
        },
        "P3374": {
            "title": "endianness",
            "type": "Item"
        },
        "P3375": {
            "title": "GECD Firmen-ID",
            "type": "External identifier"
        },
        "P3376": {
            "title": "Enterprise number (Belgium)",
            "type": "External identifier"
        },
        "P3377": {
            "title": "Bloomberg private company ID",
            "type": "External identifier"
        },
        "P3378": {
            "title": "Merck Index reaction ID",
            "type": "External identifier"
        },
        "P3379": {
            "title": "Model Manual ID",
            "type": "External identifier"
        },
        "P3380": {
            "title": "FAO 2007 genetic resource ID",
            "type": "External identifier"
        },
        "P3381": {
            "title": "File Format Wiki page ID",
            "type": "External identifier"
        },
        "P3382": {
            "title": "GeneDB ID",
            "type": "External identifier"
        },
        "P3383": {
            "title": "film poster",
            "type": "Commons media file"
        },
        "P3385": {
            "title": "Japan Sumo Association ID",
            "type": "External identifier"
        },
        "P3386": {
            "title": "French Sculpture Census work ID",
            "type": "External identifier"
        },
        "P3387": {
            "title": "minimum frequency of audible sound",
            "type": "Quantity"
        },
        "P3388": {
            "title": "LittleSis people ID",
            "type": "External identifier"
        },
        "P3389": {
            "title": "Royal Swedish Academy of Letters member ID",
            "type": "External identifier"
        },
        "P3390": {
            "title": "Consolidated code of the electronic catalog of libraries of Belarus",
            "type": "External identifier"
        },
        "P3391": {
            "title": "Verkhovna Rada MP ID",
            "type": "External identifier"
        },
        "P3392": {
            "title": "Surman ID",
            "type": "External identifier"
        },
        "P3393": {
            "title": "LittleSis organisation ID",
            "type": "External identifier"
        },
        "P3394": {
            "title": "Finnish Lake ID",
            "type": "External identifier"
        },
        "P3395": {
            "title": "heart rate",
            "type": "Quantity"
        },
        "P3396": {
            "title": "French Catholic Church structure ID",
            "type": "External identifier"
        },
        "P3397": {
            "title": "Guide of the French Church person ID",
            "type": "External identifier"
        },
        "P3398": {
            "title": "Butterflies and Moths of North America ID",
            "type": "External identifier"
        },
        "P3399": {
            "title": "JTWC tropical cyclone ID",
            "type": "External identifier"
        },
        "P3400": {
            "title": "CORDIS Project ID",
            "type": "External identifier"
        },
        "P3401": {
            "title": "Wilderness.net ID",
            "type": "External identifier"
        },
        "P3402": {
            "title": "CNC film rating (Romania)",
            "type": "Item"
        },
        "P3403": {
            "title": "coextensive with",
            "type": "Item"
        },
        "P3404": {
            "title": "The Vogue List ID",
            "type": "External identifier"
        },
        "P3405": {
            "title": "Nederlands Soortenregister ID",
            "type": "External identifier"
        },
        "P3406": {
            "title": "Saccharomyces Genome Database ID",
            "type": "External identifier"
        },
        "P3407": {
            "title": "Klosterdatenbank ID",
            "type": "External identifier"
        },
        "P3408": {
            "title": "FINA athlete ID",
            "type": "External identifier"
        },
        "P3409": {
            "title": "Catalogus Professorum Lipsiensis ID",
            "type": "External identifier"
        },
        "P3410": {
            "title": "Clergy of the Church of England database ID",
            "type": "External identifier"
        },
        "P3411": {
            "title": "Saxon Academy of Sciences member ID",
            "type": "External identifier"
        },
        "P3412": {
            "title": "Canadian Environmental Sustainability Indicators ID (Protected areas)",
            "type": "External identifier"
        },
        "P3413": {
            "title": "Leopoldina member ID",
            "type": "External identifier"
        },
        "P3414": {
            "title": "Yle Areena ID",
            "type": "External identifier"
        },
        "P3415": {
            "title": "start period",
            "type": "Item"
        },
        "P3416": {
            "title": "end period",
            "type": "Item"
        },
        "P3417": {
            "title": "Quora topic ID",
            "type": "External identifier"
        },
        "P3418": {
            "title": "Google Play Store App ID",
            "type": "External identifier"
        },
        "P3419": {
            "title": "Basic Unit of Settlement code (Czech/Slovak)",
            "type": "External identifier"
        },
        "P3420": {
            "title": "Calflora ID",
            "type": "External identifier"
        },
        "P3421": {
            "title": "Belvedere artist ID",
            "type": "External identifier"
        },
        "P3422": {
            "title": "INSEE countries and foreign territories code",
            "type": "External identifier"
        },
        "P3423": {
            "title": "INSEE arrondissement code",
            "type": "External identifier"
        },
        "P3424": {
            "title": "Polish cultural heritage register number",
            "type": "External identifier"
        },
        "P3425": {
            "title": "Natura 2000 site ID",
            "type": "External identifier"
        },
        "P3426": {
            "title": "ArbetSam ID",
            "type": "External identifier"
        },
        "P3427": {
            "title": "AS.com athlete ID",
            "type": "External identifier"
        },
        "P3428": {
            "title": "INCAA film rating",
            "type": "Item"
        },
        "P3429": {
            "title": "Electronic Enlightenment ID",
            "type": "External identifier"
        },
        "P3430": {
            "title": "SNAC Ark ID",
            "type": "External identifier"
        },
        "P3431": {
            "title": "Publons Publication ID",
            "type": "External identifier"
        },
        "P3432": {
            "title": "parent cell line",
            "type": "Item"
        },
        "P3433": {
            "title": "biological variant of",
            "type": "Item"
        },
        "P3434": {
            "title": "ERIH PLUS ID",
            "type": "External identifier"
        },
        "P3435": {
            "title": "VGMdb artist ID",
            "type": "External identifier"
        },
        "P3436": {
            "title": "AELG ID",
            "type": "External identifier"
        },
        "P3437": {
            "title": "people or cargo transported",
            "type": "Item"
        },
        "P3438": {
            "title": "vehicle normally used",
            "type": "Item"
        },
        "P3439": {
            "title": "angular resolution",
            "type": "Quantity"
        },
        "P344": {
            "title": "director of photography",
            "type": "Item"
        },
        "P3440": {
            "title": "time signature",
            "type": "Item"
        },
        "P3441": {
            "title": "FIFA country code",
            "type": "String"
        },
        "P3442": {
            "title": "Debian stable package",
            "type": "External identifier"
        },
        "P3443": {
            "title": "Victorian Heritage Database ID",
            "type": "External identifier"
        },
        "P3444": {
            "title": "eBird ID",
            "type": "External identifier"
        },
        "P3445": {
            "title": "Cinema of Israel ID",
            "type": "External identifier"
        },
        "P3446": {
            "title": "FIDAL ID",
            "type": "External identifier"
        },
        "P3447": {
            "title": "mirrors data from",
            "type": "Item"
        },
        "P3448": {
            "title": "stepparent",
            "type": "Item"
        },
        "P3449": {
            "title": "NSW Heritage database ID",
            "type": "External identifier"
        },
        "P345": {
            "title": "IMDb ID",
            "type": "External identifier"
        },
        "P3450": {
            "title": "sports season of",
            "type": "Item"
        },
        "P3451": {
            "title": "nighttime view",
            "type": "Commons media file"
        },
        "P3452": {
            "title": "inferred from",
            "type": "Item"
        },
        "P3453": {
            "title": "IPI base code",
            "type": "External identifier"
        },
        "P3454": {
            "title": "Arch package",
            "type": "External identifier"
        },
        "P3455": {
            "title": "CircleID",
            "type": "External identifier"
        },
        "P3456": {
            "title": "ATP tennis tournament ID",
            "type": "External identifier"
        },
        "P3457": {
            "title": "case fatality rate",
            "type": "Quantity"
        },
        "P3458": {
            "title": "CNC authorization number",
            "type": "External identifier"
        },
        "P3459": {
            "title": "Euring number",
            "type": "External identifier"
        },
        "P3460": {
            "title": "colonel-in-chief",
            "type": "Item"
        },
        "P3461": {
            "title": "designated as terrorist by",
            "type": "Item"
        },
        "P3462": {
            "title": "FAMA work ID",
            "type": "External identifier"
        },
        "P3463": {
            "title": "Fedora package",
            "type": "External identifier"
        },
        "P3464": {
            "title": "medicine marketing authorization",
            "type": "Item"
        },
        "P3465": {
            "title": "maximum frequency of audible sound",
            "type": "Quantity"
        },
        "P3466": {
            "title": "Israeli CBS municipal ID",
            "type": "External identifier"
        },
        "P3467": {
            "title": "Inventario Sculture - Polo Museale Fiorentino",
            "type": "External identifier"
        },
        "P3468": {
            "title": "National Inventors Hall of Fame ID",
            "type": "External identifier"
        },
        "P3469": {
            "title": "WTA tennis tournament ID",
            "type": "External identifier"
        },
        "P347": {
            "title": "Joconde ID",
            "type": "External identifier"
        },
        "P3470": {
            "title": "Woodland Trust wood ID",
            "type": "External identifier"
        },
        "P3471": {
            "title": "WikiSkripta ID",
            "type": "External identifier"
        },
        "P3472": {
            "title": "VICNAMES Place ID",
            "type": "External identifier"
        },
        "P3473": {
            "title": "Ubuntu package",
            "type": "External identifier"
        },
        "P3475": {
            "title": "SANU member ID",
            "type": "External identifier"
        },
        "P3476": {
            "title": "PSA World Tour ID",
            "type": "External identifier"
        },
        "P3477": {
            "title": "Nihon Tarento Meikan ID",
            "type": "External identifier"
        },
        "P3478": {
            "title": "Songkick artist ID",
            "type": "External identifier"
        },
        "P3479": {
            "title": "Omni topic ID",
            "type": "External identifier"
        },
        "P348": {
            "title": "software version",
            "type": "String"
        },
        "P3480": {
            "title": "base M\u00e9moire reference",
            "type": "External identifier"
        },
        "P3481": {
            "title": "Parks & Gardens UK Record ID",
            "type": "External identifier"
        },
        "P3482": {
            "title": "Europeana Fashion creator ID",
            "type": "External identifier"
        },
        "P3483": {
            "title": "VGMdb album ID",
            "type": "External identifier"
        },
        "P3485": {
            "title": "bite force quotient",
            "type": "Quantity"
        },
        "P3486": {
            "title": "normal respiratory rate",
            "type": "Quantity"
        },
        "P3487": {
            "title": "maximal incubation period in humans",
            "type": "Quantity"
        },
        "P3488": {
            "title": "minimal incubation period in humans",
            "type": "Quantity"
        },
        "P3489": {
            "title": "pregnancy category",
            "type": "Item"
        },
        "P349": {
            "title": "NDL Auth ID",
            "type": "External identifier"
        },
        "P3490": {
            "title": "muscle origin",
            "type": "Item"
        },
        "P3491": {
            "title": "muscle insertion",
            "type": "Item"
        },
        "P3492": {
            "title": "basic reproduction number",
            "type": "Quantity"
        },
        "P3493": {
            "title": "legal status (medicine)",
            "type": "Item"
        },
        "P3494": {
            "title": "points classification",
            "type": "Item"
        },
        "P3495": {
            "title": "FilmPolski.pl ID",
            "type": "External identifier"
        },
        "P3496": {
            "title": "teams classification by points",
            "type": "Item"
        },
        "P3497": {
            "title": "teams classification by time",
            "type": "Item"
        },
        "P3498": {
            "title": "ZNIEFF ID",
            "type": "External identifier"
        },
        "P3499": {
            "title": "Gentoo package",
            "type": "External identifier"
        },
        "P35": {
            "title": "head of state",
            "type": "Item"
        },
        "P350": {
            "title": "RKDimages ID",
            "type": "External identifier"
        },
        "P3500": {
            "title": "Ringgold ID",
            "type": "External identifier"
        },
        "P3501": {
            "title": "Catholic rite",
            "type": "Item"
        },
        "P3502": {
            "title": "Ameblo username",
            "type": "External identifier"
        },
        "P3503": {
            "title": "LombardiaBeniCulturali building ID",
            "type": "External identifier"
        },
        "P3504": {
            "title": "Florentine Inventario Palatina art ID",
            "type": "External identifier"
        },
        "P3505": {
            "title": "BoardGameGeek designer ID",
            "type": "External identifier"
        },
        "P3506": {
            "title": "Luding designer ID",
            "type": "External identifier"
        },
        "P3507": {
            "title": "Bivouac.com mountain ID",
            "type": "External identifier"
        },
        "P3509": {
            "title": "Dagens Nyheter topic ID",
            "type": "External identifier"
        },
        "P351": {
            "title": "Entrez Gene ID",
            "type": "External identifier"
        },
        "P3511": {
            "title": "VGMDb organization ID",
            "type": "External identifier"
        },
        "P3512": {
            "title": "means of locomotion",
            "type": "Item"
        },
        "P3513": {
            "title": "peakware mountain ID",
            "type": "External identifier"
        },
        "P3514": {
            "title": "U.S. National Geodetic Survey ID",
            "type": "External identifier"
        },
        "P3515": {
            "title": "NPCA ID",
            "type": "External identifier"
        },
        "P3516": {
            "title": "National Park Foundation ID",
            "type": "External identifier"
        },
        "P3517": {
            "title": "Geographical Names Board of New South Wales ID",
            "type": "External identifier"
        },
        "P3518": {
            "title": "Smithsonian trinomial",
            "type": "External identifier"
        },
        "P3519": {
            "title": "Pfam ID",
            "type": "External identifier"
        },
        "P352": {
            "title": "UniProt protein ID",
            "type": "External identifier"
        },
        "P3520": {
            "title": "databaseOlympics.com athlete ID",
            "type": "External identifier"
        },
        "P3521": {
            "title": "EuroTour golf player ID",
            "type": "External identifier"
        },
        "P3522": {
            "title": "NHL.com player ID",
            "type": "External identifier"
        },
        "P3523": {
            "title": "Rfam ID",
            "type": "External identifier"
        },
        "P3524": {
            "title": "Simple Modular Architecture Research Tool ID",
            "type": "External identifier"
        },
        "P3525": {
            "title": "acb.com ID",
            "type": "External identifier"
        },
        "P3526": {
            "title": "wisdenindia.com ID",
            "type": "External identifier"
        },
        "P3527": {
            "title": "eurobasket.com ID",
            "type": "External identifier"
        },
        "P3528": {
            "title": "Luding game ID",
            "type": "External identifier"
        },
        "P3529": {
            "title": "median income",
            "type": "Quantity"
        },
        "P353": {
            "title": "HGNC gene symbol",
            "type": "External identifier"
        },
        "P3530": {
            "title": "par",
            "type": "Quantity"
        },
        "P3531": {
            "title": "AZBilliards ID",
            "type": "External identifier"
        },
        "P3532": {
            "title": "databaseFootball.com ID",
            "type": "External identifier"
        },
        "P3533": {
            "title": "draftexpress.com ID",
            "type": "External identifier"
        },
        "P3534": {
            "title": "Australian Government Organisations Register ID",
            "type": "External identifier"
        },
        "P3535": {
            "title": "JapanTour golf player ID",
            "type": "External identifier"
        },
        "P3536": {
            "title": "euroleague.net ID",
            "type": "External identifier"
        },
        "P3537": {
            "title": "FootballDatabase.eu ID",
            "type": "External identifier"
        },
        "P3538": {
            "title": "Fussballdaten.de ID",
            "type": "External identifier"
        },
        "P3539": {
            "title": "NFL.com ID",
            "type": "External identifier"
        },
        "P354": {
            "title": "HGNC ID",
            "type": "External identifier"
        },
        "P3541": {
            "title": "MLB ID",
            "type": "External identifier"
        },
        "P3542": {
            "title": "FIBA player ID",
            "type": "External identifier"
        },
        "P3544": {
            "title": "Te Papa person ID",
            "type": "External identifier"
        },
        "P3545": {
            "title": "Theoi Project ID",
            "type": "External identifier"
        },
        "P3546": {
            "title": "AustralianFootball.com ID",
            "type": "External identifier"
        },
        "P3547": {
            "title": "AFL Tables player ID",
            "type": "External identifier"
        },
        "P3548": {
            "title": "Australian Business Number",
            "type": "External identifier"
        },
        "P3549": {
            "title": "Australian Company Number",
            "type": "External identifier"
        },
        "P355": {
            "title": "subsidiary",
            "type": "Item"
        },
        "P3550": {
            "title": "Australian Register of Therapeutic Goods ID",
            "type": "External identifier"
        },
        "P3551": {
            "title": "Australian Registered Body Number",
            "type": "External identifier"
        },
        "P3552": {
            "title": "Australian Registered Scheme Number",
            "type": "External identifier"
        },
        "P3553": {
            "title": "Zhihu topic ID",
            "type": "External identifier"
        },
        "P3554": {
            "title": "World Series of Poker ID",
            "type": "External identifier"
        },
        "P3555": {
            "title": "World Guide to Covered Bridges ID",
            "type": "External identifier"
        },
        "P3556": {
            "title": "World Curling Tour ID",
            "type": "External identifier"
        },
        "P3557": {
            "title": "World Curling Federation ID",
            "type": "External identifier"
        },
        "P3558": {
            "title": "USCF ID",
            "type": "External identifier"
        },
        "P3559": {
            "title": "maximum size or capacity",
            "type": "Quantity"
        },
        "P356": {
            "title": "DOI",
            "type": "External identifier"
        },
        "P3560": {
            "title": "College Football Data Warehouse ID",
            "type": "External identifier"
        },
        "P3561": {
            "title": "pro-football-reference ID",
            "type": "External identifier"
        },
        "P3562": {
            "title": "Admiralty number",
            "type": "External identifier"
        },
        "P3563": {
            "title": "NGA Lighthouse ID",
            "type": "External identifier"
        },
        "P3564": {
            "title": "Global Poker Index ID",
            "type": "External identifier"
        },
        "P3565": {
            "title": "J.League player ID",
            "type": "External identifier"
        },
        "P3566": {
            "title": "Just Sports Stats ID",
            "type": "External identifier"
        },
        "P3567": {
            "title": "HHOF.com NHL player ID",
            "type": "External identifier"
        },
        "P3568": {
            "title": "OWGR ID",
            "type": "External identifier"
        },
        "P3569": {
            "title": "Cultureel Woordenboek identifier",
            "type": "External identifier"
        },
        "P3570": {
            "title": "European Case Law id",
            "type": "External identifier"
        },
        "P3571": {
            "title": "ESPN.com MLB player ID",
            "type": "External identifier"
        },
        "P3572": {
            "title": "ESPNcricinfo playing ground ID",
            "type": "External identifier"
        },
        "P3573": {
            "title": "European Handball Federation ID",
            "type": "External identifier"
        },
        "P3574": {
            "title": "Fangraphs ID",
            "type": "External identifier"
        },
        "P3575": {
            "title": "data size",
            "type": "Quantity"
        },
        "P3576": {
            "title": "TLG author ID",
            "type": "External identifier"
        },
        "P3577": {
            "title": "Croatian Football Federation player ID",
            "type": "External identifier"
        },
        "P3578": {
            "title": "autologous cell line",
            "type": "Item"
        },
        "P3579": {
            "title": "Sina Weibo ID",
            "type": "External identifier"
        },
        "P358": {
            "title": "discography",
            "type": "Item"
        },
        "P3580": {
            "title": "SIPCA code",
            "type": "External identifier"
        },
        "P3581": {
            "title": "Pro Football Hall of Fame ID",
            "type": "External identifier"
        },
        "P3582": {
            "title": "SunshineTour ID",
            "type": "External identifier"
        },
        "P3583": {
            "title": "Surfline ID",
            "type": "External identifier"
        },
        "P3584": {
            "title": "ITRA runner ID",
            "type": "External identifier"
        },
        "P3585": {
            "title": "UltraSignup runner ID",
            "type": "External identifier"
        },
        "P3586": {
            "title": "CricketArchive playing ground ID",
            "type": "External identifier"
        },
        "P3587": {
            "title": "Common Vulnerabilities and Exposures ID",
            "type": "External identifier"
        },
        "P3588": {
            "title": "WNBA player ID",
            "type": "External identifier"
        },
        "P3589": {
            "title": "GCD series ID",
            "type": "External identifier"
        },
        "P359": {
            "title": "Rijksmonument ID",
            "type": "External identifier"
        },
        "P3590": {
            "title": "Relations Ontology ID",
            "type": "External identifier"
        },
        "P3591": {
            "title": "WCSPF ID",
            "type": "External identifier"
        },
        "P3592": {
            "title": "Saros cycle of eclipse",
            "type": "Item"
        },
        "P3593": {
            "title": "AFI Catalog of Feature Films ID",
            "type": "External identifier"
        },
        "P3594": {
            "title": "Araneae Spider ID",
            "type": "External identifier"
        },
        "P3595": {
            "title": "BLF article ID",
            "type": "External identifier"
        },
        "P3596": {
            "title": "Danish ancient monument ID",
            "type": "External identifier"
        },
        "P3597": {
            "title": "F-Droid package",
            "type": "External identifier"
        },
        "P3598": {
            "title": "Hockey-reference player ID",
            "type": "External identifier"
        },
        "P3599": {
            "title": "archival creator authority record at the Archives nationales",
            "type": "External identifier"
        },
        "P36": {
            "title": "capital",
            "type": "Item"
        },
        "P360": {
            "title": "is a list of",
            "type": "Item"
        },
        "P361": {
            "title": "part of",
            "type": "Item"
        },
        "P364": {
            "title": "original language of work",
            "type": "Item"
        },
        "P366": {
            "title": "use",
            "type": "Item"
        },
        "P367": {
            "title": "astronomic symbol image",
            "type": "Commons media file"
        },
        "P368": {
            "title": "Sandbox-CommonsMediaFile",
            "type": "Commons media file"
        },
        "P369": {
            "title": "Sandbox-Item",
            "type": "Item"
        },
        "P37": {
            "title": "official language",
            "type": "Item"
        },
        "P370": {
            "title": "Sandbox-String",
            "type": "String"
        },
        "P3700": {
            "title": "NHF player ID",
            "type": "External identifier"
        },
        "P3701": {
            "title": "incarnation of",
            "type": "Item"
        },
        "P3702": {
            "title": "Catalogue of Illuminated Manuscripts ID",
            "type": "External identifier"
        },
        "P3703": {
            "title": "JMDb person or company ID",
            "type": "External identifier"
        },
        "P3704": {
            "title": "KMDb film ID",
            "type": "External identifier"
        },
        "P3705": {
            "title": "RITVA Program ID",
            "type": "External identifier"
        },
        "P3706": {
            "title": "RITVA Person ID",
            "type": "External identifier"
        },
        "P3707": {
            "title": "Gridabase glacier ID",
            "type": "External identifier"
        },
        "P3708": {
            "title": "PhDTree person ID",
            "type": "External identifier"
        },
        "P3709": {
            "title": "category for value different from Wikidata",
            "type": "Item"
        },
        "P371": {
            "title": "presenter",
            "type": "Item"
        },
        "P3710": {
            "title": "Jewish Encyclopedia Daat ID",
            "type": "External identifier"
        },
        "P3711": {
            "title": "Vanderkrogt.net Statues ID",
            "type": "External identifier"
        },
        "P3712": {
            "title": "objective of project or mission",
            "type": "Item"
        },
        "P3713": {
            "title": "category for value not in Wikidata",
            "type": "Item"
        },
        "P3714": {
            "title": "Recreation.gov facility ID",
            "type": "External identifier"
        },
        "P3715": {
            "title": "NISH Hall of Fame ID",
            "type": "External identifier"
        },
        "P3716": {
            "title": "social classification",
            "type": "Item"
        },
        "P3717": {
            "title": "MEROPS enzyme ID",
            "type": "External identifier"
        },
        "P3718": {
            "title": "NCMEC person ID",
            "type": "External identifier"
        },
        "P3719": {
            "title": "regulated by",
            "type": "Item"
        },
        "P3720": {
            "title": "GPnotebook ID",
            "type": "External identifier"
        },
        "P3721": {
            "title": "public key fingerprint",
            "type": "String"
        },
        "P3722": {
            "title": "Commons maps category",
            "type": "String"
        },
        "P3723": {
            "title": "USCG Lighthouse ID",
            "type": "External identifier"
        },
        "P3724": {
            "title": "USHMM Holocaust Encyclopedia ID",
            "type": "External identifier"
        },
        "P3725": {
            "title": "CEV player ID",
            "type": "External identifier"
        },
        "P3726": {
            "title": "Eu-football.info player ID",
            "type": "External identifier"
        },
        "P3727": {
            "title": "Serbia municipality ID",
            "type": "External identifier"
        },
        "P3728": {
            "title": "New Zealand Heritage List number",
            "type": "External identifier"
        },
        "P3729": {
            "title": "next lower rank",
            "type": "Item"
        },
        "P373": {
            "title": "Commons category",
            "type": "String"
        },
        "P3730": {
            "title": "next higher rank",
            "type": "Item"
        },
        "P3731": {
            "title": "Serbia cadastral municipality ID",
            "type": "External identifier"
        },
        "P3732": {
            "title": "PhilPapers record",
            "type": "External identifier"
        },
        "P3733": {
            "title": "MOOMA artist ID",
            "type": "External identifier"
        },
        "P3734": {
            "title": "category for value same as Wikidata",
            "type": "Item"
        },
        "P3735": {
            "title": "Yad Vashem Encyclopedia of the Ghettos ID",
            "type": "External identifier"
        },
        "P3736": {
            "title": "Eurovision Song Contest song ID",
            "type": "External identifier"
        },
        "P3737": {
            "title": "maximum wavelength of sensitivity",
            "type": "Quantity"
        },
        "P3738": {
            "title": "minimum wavelength of sensitivity",
            "type": "Quantity"
        },
        "P3739": {
            "title": "inflorescence",
            "type": "Item"
        },
        "P374": {
            "title": "INSEE municipality code",
            "type": "External identifier"
        },
        "P3740": {
            "title": "number of works",
            "type": "Quantity"
        },
        "P3741": {
            "title": "seed dispersal",
            "type": "Item"
        },
        "P3742": {
            "title": "FIH player ID",
            "type": "External identifier"
        },
        "P3743": {
            "title": "ITU/ISO/IEC object identifier",
            "type": "External identifier"
        },
        "P3744": {
            "title": "number of subscribers",
            "type": "Quantity"
        },
        "P3745": {
            "title": "World Rugby Sevens Series ID",
            "type": "External identifier"
        },
        "P3746": {
            "title": "Wildflowers of Israel ID",
            "type": "External identifier"
        },
        "P3747": {
            "title": "SSRN author ID",
            "type": "External identifier"
        },
        "P3748": {
            "title": "Israel Football Association national team player ID",
            "type": "External identifier"
        },
        "P3749": {
            "title": "Google Maps CID",
            "type": "External identifier"
        },
        "P375": {
            "title": "space launch vehicle",
            "type": "Item"
        },
        "P3750": {
            "title": "KMDb documentary ID",
            "type": "External identifier"
        },
        "P3751": {
            "title": "Shoftim BeIsrael judge ID",
            "type": "External identifier"
        },
        "P3752": {
            "title": "worst-case performance",
            "type": "Mathematical expression"
        },
        "P3753": {
            "title": "best-case performance",
            "type": "Mathematical expression"
        },
        "P3754": {
            "title": "average performance",
            "type": "Mathematical expression"
        },
        "P3755": {
            "title": "worst-case space complexity",
            "type": "Mathematical expression"
        },
        "P3756": {
            "title": "best-case space complexity",
            "type": "Mathematical expression"
        },
        "P3757": {
            "title": "average space complexity",
            "type": "Mathematical expression"
        },
        "P3758": {
            "title": "DOCOMOMO Ib\u00e9rico ID",
            "type": "External identifier"
        },
        "P3759": {
            "title": "SAHRA heritage site ID",
            "type": "External identifier"
        },
        "P376": {
            "title": "located on astronomical body",
            "type": "Item"
        },
        "P3760": {
            "title": "Iditarod musher ID",
            "type": "External identifier"
        },
        "P3761": {
            "title": "IPv4 routing prefix",
            "type": "String"
        },
        "P3762": {
            "title": "openMLOL author ID",
            "type": "External identifier"
        },
        "P3763": {
            "title": "MIMO instrument ID",
            "type": "External identifier"
        },
        "P3764": {
            "title": "pole position",
            "type": "Item"
        },
        "P3765": {
            "title": "All-Athletics.com ID",
            "type": "External identifier"
        },
        "P3766": {
            "title": "European Athletics ID",
            "type": "External identifier"
        },
        "P3767": {
            "title": "FFA ID",
            "type": "External identifier"
        },
        "P3768": {
            "title": "Medieval Libraries of Great Britain ID",
            "type": "External identifier"
        },
        "P3769": {
            "title": "It's Rugby ID",
            "type": "External identifier"
        },
        "P377": {
            "title": "SCN",
            "type": "External identifier"
        },
        "P3770": {
            "title": "PeakFinder ID",
            "type": "External identifier"
        },
        "P3771": {
            "title": "activator of",
            "type": "Item"
        },
        "P3772": {
            "title": "agonist of",
            "type": "Item"
        },
        "P3773": {
            "title": "antagonist of",
            "type": "Item"
        },
        "P3774": {
            "title": "blocker of",
            "type": "Item"
        },
        "P3775": {
            "title": "disrupting agent for",
            "type": "Item"
        },
        "P3776": {
            "title": "inhibitor of",
            "type": "Item"
        },
        "P3777": {
            "title": "antisense inhibitor of",
            "type": "Item"
        },
        "P3778": {
            "title": "positive allosteric modulator of",
            "type": "Item"
        },
        "P3779": {
            "title": "negative allosteric modulator of",
            "type": "Item"
        },
        "P3780": {
            "title": "active ingredient in",
            "type": "Item"
        },
        "P3781": {
            "title": "has active ingredient",
            "type": "Item"
        },
        "P3782": {
            "title": "Artnet artist ID",
            "type": "External identifier"
        },
        "P3783": {
            "title": "Christie's work ID",
            "type": "External identifier"
        },
        "P3784": {
            "title": "CiteSeerX article ID",
            "type": "External identifier"
        },
        "P3785": {
            "title": "danskefilm film ID",
            "type": "External identifier"
        },
        "P3786": {
            "title": "danskefilm person ID",
            "type": "External identifier"
        },
        "P3787": {
            "title": "danskefilm silent film ID",
            "type": "External identifier"
        },
        "P3788": {
            "title": "BNA authority ID",
            "type": "External identifier"
        },
        "P3789": {
            "title": "Telegram username",
            "type": "External identifier"
        },
        "P3790": {
            "title": "AnimeCons.com ID",
            "type": "External identifier"
        },
        "P3791": {
            "title": "Art Renewal Center ID",
            "type": "External identifier"
        },
        "P3792": {
            "title": "rate of fire",
            "type": "Quantity"
        },
        "P3793": {
            "title": "IPv6 routing prefix",
            "type": "String"
        },
        "P3794": {
            "title": "Dictionary of Sydney ID",
            "type": "External identifier"
        },
        "P3795": {
            "title": "Flora of Israel plant ID",
            "type": "External identifier"
        },
        "P3796": {
            "title": "Bureau of Meteorology station ID",
            "type": "External identifier"
        },
        "P3797": {
            "title": "autonomous system number",
            "type": "External identifier"
        },
        "P3798": {
            "title": "Star Wars Databank ID",
            "type": "External identifier"
        },
        "P3799": {
            "title": "Safsal player ID",
            "type": "External identifier"
        },
        "P38": {
            "title": "currency",
            "type": "Item"
        },
        "P380": {
            "title": "M\u00e9rim\u00e9e ID",
            "type": "External identifier"
        },
        "P3800": {
            "title": "Safsal coach ID",
            "type": "External identifier"
        },
        "P3801": {
            "title": "INEGI municipality ID",
            "type": "External identifier"
        },
        "P3802": {
            "title": "Launchpad.net project ID",
            "type": "External identifier"
        },
        "P3803": {
            "title": "original film format",
            "type": "Item"
        },
        "P3804": {
            "title": "TV Guide show ID",
            "type": "External identifier"
        },
        "P3805": {
            "title": "Tax-exempt heritage asset ID",
            "type": "External identifier"
        },
        "P3806": {
            "title": "Mapa place ID",
            "type": "External identifier"
        },
        "P3807": {
            "title": "S2A3 Biographical Database ID",
            "type": "External identifier"
        },
        "P3808": {
            "title": "The Numbers movie ID",
            "type": "External identifier"
        },
        "P3809": {
            "title": "YerelNET district ID",
            "type": "External identifier"
        },
        "P381": {
            "title": "PCP reference number",
            "type": "External identifier"
        },
        "P3810": {
            "title": "Parks.it ID",
            "type": "External identifier"
        },
        "P3811": {
            "title": "Evidence & Conclusion Ontology ID",
            "type": "External identifier"
        },
        "P3812": {
            "title": "Elle.fr person ID",
            "type": "External identifier"
        },
        "P3813": {
            "title": "Bivouac.com pass ID",
            "type": "External identifier"
        },
        "P3814": {
            "title": "BoF person ID",
            "type": "External identifier"
        },
        "P3815": {
            "title": "volcano observatory",
            "type": "Item"
        },
        "P3816": {
            "title": "film script",
            "type": "Item"
        },
        "P3817": {
            "title": "FI WarSampo person ID",
            "type": "External identifier"
        },
        "P3818": {
            "title": "KMRB film rating",
            "type": "Item"
        },
        "P3819": {
            "title": "FI WarSampo army unit ID",
            "type": "External identifier"
        },
        "P382": {
            "title": "CBS municipality code",
            "type": "External identifier"
        },
        "P3820": {
            "title": "Flanders Arts Institute venue ID",
            "type": "External identifier"
        },
        "P3821": {
            "title": "Bangla Movie Database ID",
            "type": "External identifier"
        },
        "P3822": {
            "title": "rules for classification",
            "type": "Item"
        },
        "P3823": {
            "title": "Ethnologue language status",
            "type": "Item"
        },
        "P3824": {
            "title": "VTJ-PRT building ID",
            "type": "External identifier"
        },
        "P3825": {
            "title": "United States Statutes at Large citation",
            "type": "External identifier"
        },
        "P3826": {
            "title": "Welsh Rugby Union men's player ID",
            "type": "External identifier"
        },
        "P3827": {
            "title": "JSTOR topic ID",
            "type": "External identifier"
        },
        "P3828": {
            "title": "wears",
            "type": "Item"
        },
        "P3829": {
            "title": "Publons author ID",
            "type": "External identifier"
        },
        "P3830": {
            "title": "CueTracker player ID",
            "type": "External identifier"
        },
        "P3831": {
            "title": "object has role",
            "type": "Item"
        },
        "P3832": {
            "title": "Europeana Fashion Vocabulary ID",
            "type": "External identifier"
        },
        "P3833": {
            "title": "diaspora",
            "type": "Item"
        },
        "P3834": {
            "title": "RTC film rating",
            "type": "Item"
        },
        "P3835": {
            "title": "Mendeley person ID",
            "type": "External identifier"
        },
        "P3836": {
            "title": "Pinterest username",
            "type": "External identifier"
        },
        "P3837": {
            "title": "United States Public Law",
            "type": "External identifier"
        },
        "P3838": {
            "title": "Tab4u song ID",
            "type": "External identifier"
        },
        "P3839": {
            "title": "Tab4u artist ID",
            "type": "External identifier"
        },
        "P3840": {
            "title": "slope rating",
            "type": "Quantity"
        },
        "P3841": {
            "title": "Human Phenotype Ontology ID",
            "type": "External identifier"
        },
        "P3842": {
            "title": "located in present-day administrative territorial entity",
            "type": "Item"
        },
        "P3843": {
            "title": "DLV athlete ID",
            "type": "External identifier"
        },
        "P3844": {
            "title": "Deutsche Synchronkartei film ID",
            "type": "External identifier"
        },
        "P3845": {
            "title": "TV Guide person ID",
            "type": "External identifier"
        },
        "P3846": {
            "title": "DBC author ID",
            "type": "External identifier"
        },
        "P3847": {
            "title": "Open Library subject ID",
            "type": "External identifier"
        },
        "P3848": {
            "title": "Irish Rugby Football Union men's player ID",
            "type": "External identifier"
        },
        "P3849": {
            "title": "LombardiaBeniCulturali institution ID",
            "type": "External identifier"
        },
        "P3850": {
            "title": "LombardiaBeniCulturali toponym ID",
            "type": "External identifier"
        },
        "P3851": {
            "title": "cinenacional.com movie ID",
            "type": "External identifier"
        },
        "P3852": {
            "title": "FlyBase Gene ID",
            "type": "External identifier"
        },
        "P3853": {
            "title": "Rat Genome Database ID",
            "type": "External identifier"
        },
        "P3854": {
            "title": "Soundtrack Collector ID",
            "type": "External identifier"
        },
        "P3855": {
            "title": "LombardiaBeniCulturali artwork ID",
            "type": "External identifier"
        },
        "P3856": {
            "title": "Quebec municipalities geographical code",
            "type": "External identifier"
        },
        "P3857": {
            "title": "cinenacional.com person ID",
            "type": "External identifier"
        },
        "P3858": {
            "title": "route diagram",
            "type": "Item"
        },
        "P3859": {
            "title": "Environment Ontology ID",
            "type": "External identifier"
        },
        "P3860": {
            "title": "Wormbase Gene ID",
            "type": "External identifier"
        },
        "P3861": {
            "title": "iTunes app ID",
            "type": "External identifier"
        },
        "P3862": {
            "title": "MyDramaList name ID",
            "type": "External identifier"
        },
        "P3863": {
            "title": "Italian Navy Lighthouses and Beacons ID",
            "type": "External identifier"
        },
        "P3864": {
            "title": "suicide rate",
            "type": "Quantity"
        },
        "P3865": {
            "title": "type of reference",
            "type": "Item"
        },
        "P3866": {
            "title": "LAWA waterbody ID",
            "type": "External identifier"
        },
        "P3867": {
            "title": "Israel Chess Federation player ID",
            "type": "External identifier"
        },
        "P3868": {
            "title": "MyDramaList title ID",
            "type": "External identifier"
        },
        "P3869": {
            "title": "IAFD female performer ID",
            "type": "External identifier"
        },
        "P3870": {
            "title": "ZFIN Gene ID",
            "type": "External identifier"
        },
        "P3871": {
            "title": "tributary orientation",
            "type": "Item"
        },
        "P3872": {
            "title": "patronage",
            "type": "Quantity"
        },
        "P3874": {
            "title": "Justia Patents inventor ID",
            "type": "External identifier"
        },
        "P3875": {
            "title": "Justia Patents company ID",
            "type": "External identifier"
        },
        "P3876": {
            "title": "category for alumni of educational institution",
            "type": "Item"
        },
        "P3877": {
            "title": "HappyCow restaurant ID",
            "type": "External identifier"
        },
        "P3878": {
            "title": "Soundex",
            "type": "String"
        },
        "P3879": {
            "title": "Cologne phonetics",
            "type": "String"
        },
        "P3880": {
            "title": "Caverphone",
            "type": "String"
        },
        "P3881": {
            "title": "National Track & Field Hall of Fame athlete ID",
            "type": "External identifier"
        },
        "P3882": {
            "title": "Tilastopaja female athlete ID",
            "type": "External identifier"
        },
        "P3883": {
            "title": "Red Bull athlete ID",
            "type": "External identifier"
        },
        "P3884": {
            "title": "Tilastopaja male athlete ID",
            "type": "External identifier"
        },
        "P3885": {
            "title": "History of Modern Biomedicine ID",
            "type": "External identifier"
        },
        "P3886": {
            "title": "number of perpetrators",
            "type": "Quantity"
        },
        "P3887": {
            "title": "KVAB member ID",
            "type": "External identifier"
        },
        "P3888": {
            "title": "Boijmans artist ID",
            "type": "External identifier"
        },
        "P3889": {
            "title": "Swiss Federal Archives ID",
            "type": "External identifier"
        },
        "P3890": {
            "title": "MetaboLights Compound ID",
            "type": "External identifier"
        },
        "P3891": {
            "title": "observing time available",
            "type": "Quantity"
        },
        "P3892": {
            "title": "PictoRight ID-Droit de suite",
            "type": "External identifier"
        },
        "P3893": {
            "title": "public domain date",
            "type": "Point in time"
        },
        "P3894": {
            "title": "OSTI article ID",
            "type": "External identifier"
        },
        "P3895": {
            "title": "INAO product ID",
            "type": "External identifier"
        },
        "P3896": {
            "title": "geoshape",
            "type": "Geographic shape"
        },
        "P3897": {
            "title": "Ladies European Tour ID",
            "type": "External identifier"
        },
        "P3898": {
            "title": "Hotels.com hotel ID",
            "type": "External identifier"
        },
        "P3899": {
            "title": "Medium username",
            "type": "External identifier"
        },
        "P39": {
            "title": "position held",
            "type": "Item"
        },
        "P3900": {
            "title": "CONICET person ID",
            "type": "External identifier"
        },
        "P3901": {
            "title": "ADAGP artist ID",
            "type": "External identifier"
        },
        "P3902": {
            "title": "had as last meal",
            "type": "Item"
        },
        "P3903": {
            "title": "column",
            "type": "String"
        },
        "P3904": {
            "title": "VIVC grape variety ID",
            "type": "External identifier"
        },
        "P3905": {
            "title": "GINCO ID",
            "type": "External identifier"
        },
        "P3906": {
            "title": "Ishim ID",
            "type": "External identifier"
        },
        "P3907": {
            "title": "LoJ peak ID",
            "type": "External identifier"
        },
        "P3908": {
            "title": "Reprezentacija ID",
            "type": "External identifier"
        },
        "P3909": {
            "title": "last words",
            "type": "Monolingual text"
        },
        "P3910": {
            "title": "Bollywood Hungama person ID",
            "type": "External identifier"
        },
        "P3911": {
            "title": "STW Thesaurus for Economics ID",
            "type": "External identifier"
        },
        "P3912": {
            "title": "newspaper format",
            "type": "Item"
        },
        "P3913": {
            "title": "MobyGames developer ID",
            "type": "External identifier"
        },
        "P3914": {
            "title": "GuideStar Israel organization ID",
            "type": "External identifier"
        },
        "P3915": {
            "title": "Athletics Australia athlete ID",
            "type": "External identifier"
        },
        "P3916": {
            "title": "UNESCO Thesaurus ID",
            "type": "External identifier"
        },
        "P3917": {
            "title": "IPA number order",
            "type": "Quantity"
        },
        "P3918": {
            "title": "R\u00e9pertoire national des associations identifier",
            "type": "External identifier"
        },
        "P3919": {
            "title": "contributed to published work",
            "type": "Item"
        },
        "P3920": {
            "title": "Canadian Coastguard Lighthouse ID",
            "type": "External identifier"
        },
        "P3921": {
            "title": "Wikidata SPARQL query equivalent",
            "type": "String"
        },
        "P3922": {
            "title": "light sector",
            "type": "String"
        },
        "P3923": {
            "title": "Diamond League athlete ID",
            "type": "External identifier"
        },
        "P3924": {
            "title": "Track and Field Statistics female athlete ID",
            "type": "External identifier"
        },
        "P3925": {
            "title": "Track and Field Statistics male athlete ID",
            "type": "External identifier"
        },
        "P3926": {
            "title": "USATF athlete ID",
            "type": "External identifier"
        },
        "P3927": {
            "title": "eWRC-results.com racer ID",
            "type": "External identifier"
        },
        "P3928": {
            "title": "MotoGP racer ID",
            "type": "External identifier"
        },
        "P3929": {
            "title": "V&A art work ID",
            "type": "External identifier"
        },
        "P393": {
            "title": "edition number",
            "type": "String"
        },
        "P3930": {
            "title": "Rallye-info.com driver or co-driver ID",
            "type": "External identifier"
        },
        "P3931": {
            "title": "copyright owner",
            "type": "Item"
        },
        "P3932": {
            "title": "Digital Valencian Library author ID",
            "type": "External identifier"
        },
        "P3933": {
            "title": "Cinema ID",
            "type": "External identifier"
        },
        "P3934": {
            "title": "face value",
            "type": "Quantity"
        },
        "P3935": {
            "title": "Chamber of Deputies of Italy storia ID",
            "type": "External identifier"
        },
        "P3936": {
            "title": "NFF person profile ID",
            "type": "External identifier"
        },
        "P3937": {
            "title": "Reactome ID",
            "type": "External identifier"
        },
        "P3938": {
            "title": "named by",
            "type": "Item"
        },
        "P3939": {
            "title": "ESTC citation number",
            "type": "External identifier"
        },
        "P3940": {
            "title": "OlimpBase Chess Olympiad player ID",
            "type": "External identifier"
        },
        "P3941": {
            "title": "Israel Antiquities Authority ID",
            "type": "External identifier"
        },
        "P3942": {
            "title": "Bmx-results.com rider ID",
            "type": "External identifier"
        },
        "P3943": {
            "title": "Tumblr ID",
            "type": "External identifier"
        },
        "P3944": {
            "title": "Old Bailey Proceedings ID",
            "type": "External identifier"
        },
        "P3945": {
            "title": "RANM member ID",
            "type": "External identifier"
        },
        "P3946": {
            "title": "Directorio Grierson ID",
            "type": "External identifier"
        },
        "P3948": {
            "title": "MLL player ID",
            "type": "External identifier"
        },
        "P3949": {
            "title": "Juwra.com ID",
            "type": "External identifier"
        },
        "P395": {
            "title": "licence plate code",
            "type": "String"
        },
        "P3950": {
            "title": "narrower external class",
            "type": "URL"
        },
        "P3951": {
            "title": "BioRxiv ID",
            "type": "External identifier"
        },
        "P3952": {
            "title": "Stereo Ve Mono artist ID",
            "type": "External identifier"
        },
        "P3953": {
            "title": "ALPG golfer ID",
            "type": "External identifier"
        },
        "P3954": {
            "title": "Italian Senate ID",
            "type": "External identifier"
        },
        "P3955": {
            "title": "NLL player ID",
            "type": "External identifier"
        },
        "P3956": {
            "title": "National Academy of Medicine (France) Member ID",
            "type": "External identifier"
        },
        "P3957": {
            "title": "RealGM basketball player ID",
            "type": "External identifier"
        },
        "P3958": {
            "title": "ENARD athlete ID",
            "type": "External identifier"
        },
        "P3959": {
            "title": "NNL work ID",
            "type": "External identifier"
        },
        "P396": {
            "title": "SBN ID",
            "type": "External identifier"
        },
        "P3960": {
            "title": "Base biographique AUTOR ID",
            "type": "External identifier"
        },
        "P3961": {
            "title": "Unifrance film ID",
            "type": "External identifier"
        },
        "P3962": {
            "title": "Global Trade Item Number",
            "type": "External identifier"
        },
        "P3963": {
            "title": "Clochers de France ID",
            "type": "External identifier"
        },
        "P3964": {
            "title": "BDCYL authority ID",
            "type": "External identifier"
        },
        "P3965": {
            "title": "Bridgeman artist ID",
            "type": "External identifier"
        },
        "P3966": {
            "title": "programming paradigm",
            "type": "Item"
        },
        "P3967": {
            "title": "final event",
            "type": "Item"
        },
        "P3968": {
            "title": "CETS number",
            "type": "External identifier"
        },
        "P3969": {
            "title": "signed form",
            "type": "Item"
        },
        "P397": {
            "title": "parent astronomical body",
            "type": "Item"
        },
        "P3970": {
            "title": "channel number",
            "type": "String"
        },
        "P3971": {
            "title": "PASE Domesday person ID",
            "type": "External identifier"
        },
        "P3972": {
            "title": "PASE Domesday place",
            "type": "External identifier"
        },
        "P3973": {
            "title": "PIM authority ID",
            "type": "External identifier"
        },
        "P3974": {
            "title": "nature preserve in North Rhine-Westphalia ID",
            "type": "External identifier"
        },
        "P3975": {
            "title": "secretary general",
            "type": "Item"
        },
        "P3976": {
            "title": "BVMC work ID",
            "type": "External identifier"
        },
        "P3977": {
            "title": "Songkick venue ID",
            "type": "External identifier"
        },
        "P3978": {
            "title": "IECIC 2015 ID",
            "type": "External identifier"
        },
        "P3979": {
            "title": "Unifrance company ID",
            "type": "External identifier"
        },
        "P398": {
            "title": "child astronomical body",
            "type": "Item"
        },
        "P3980": {
            "title": "Unifrance person ID",
            "type": "External identifier"
        },
        "P3981": {
            "title": "Misjonsarkiv person ID",
            "type": "External identifier"
        },
        "P3982": {
            "title": "TA98 Latin term",
            "type": "External identifier"
        },
        "P3983": {
            "title": "sports league level",
            "type": "Quantity"
        },
        "P3984": {
            "title": "subreddit",
            "type": "External identifier"
        },
        "P3985": {
            "title": "supports programming language",
            "type": "Item"
        },
        "P3986": {
            "title": "Sequence Ontology ID",
            "type": "External identifier"
        },
        "P3987": {
            "title": "SHARE Catalogue author ID",
            "type": "External identifier"
        },
        "P3988": {
            "title": "National Library Board Singapore ID",
            "type": "External identifier"
        },
        "P3989": {
            "title": "members have occupation",
            "type": "Item"
        },
        "P399": {
            "title": "companion of",
            "type": "Item"
        },
        "P3990": {
            "title": "BG EKATTE place ID",
            "type": "External identifier"
        },
        "P3991": {
            "title": "Austrian Textbook ID",
            "type": "External identifier"
        },
        "P3992": {
            "title": "SSB urban settlement number",
            "type": "External identifier"
        },
        "P3993": {
            "title": "Vitaskr\u00e1 ID",
            "type": "External identifier"
        },
        "P3994": {
            "title": "racon signal",
            "type": "String"
        },
        "P3995": {
            "title": "Filmweb.pl ID",
            "type": "External identifier"
        },
        "P3996": {
            "title": "Bait La Zemer Ha-Ivri song ID",
            "type": "External identifier"
        },
        "P3997": {
            "title": "Bait La Zemer Ha-Ivri artist ID",
            "type": "External identifier"
        },
        "P3998": {
            "title": "Censo-Gu\u00eda archive ID",
            "type": "External identifier"
        },
        "P3999": {
            "title": "date of official closure",
            "type": "Point in time"
        },
        "P40": {
            "title": "child",
            "type": "Item"
        },
        "P400": {
            "title": "platform",
            "type": "Item"
        },
        "P4000": {
            "title": "has fruit type",
            "type": "Item"
        },
        "P4001": {
            "title": "Latvian Protected Nature Territory URL",
            "type": "URL"
        },
        "P4002": {
            "title": "WFD Ecological status",
            "type": "Item"
        },
        "P4003": {
            "title": "official Facebook page",
            "type": "External identifier"
        },
        "P4004": {
            "title": "shield image",
            "type": "Commons media file"
        },
        "P4005": {
            "title": "Bavarikon ID",
            "type": "External identifier"
        },
        "P4006": {
            "title": "overrules",
            "type": "Item"
        },
        "P4007": {
            "title": "DBS ID",
            "type": "External identifier"
        },
        "P4008": {
            "title": "Early Aviators people ID",
            "type": "External identifier"
        },
        "P4009": {
            "title": "RKY national built heritage environment ID",
            "type": "External identifier"
        },
        "P4010": {
            "title": "GDP (PPP)",
            "type": "Quantity"
        },
        "P4011": {
            "title": "Semantic Scholar paper ID",
            "type": "External identifier"
        },
        "P4012": {
            "title": "Semantic Scholar author ID",
            "type": "External identifier"
        },
        "P4013": {
            "title": "Giphy username",
            "type": "External identifier"
        },
        "P4014": {
            "title": "Australian Statistical Geography 2011 ID",
            "type": "External identifier"
        },
        "P4015": {
            "title": "Vimeo username",
            "type": "External identifier"
        },
        "P4016": {
            "title": "SlideShare username",
            "type": "External identifier"
        },
        "P4017": {
            "title": "Ustream username",
            "type": "External identifier"
        },
        "P4018": {
            "title": "The Arabidopsis Information Resource Accession",
            "type": "External identifier"
        },
        "P4019": {
            "title": "USL player ID",
            "type": "External identifier"
        },
        "P402": {
            "title": "OSM relation ID",
            "type": "External identifier"
        },
        "P4020": {
            "title": "ISQ dimension",
            "type": "Mathematical expression"
        },
        "P4021": {
            "title": "danskefilm animated film ID",
            "type": "External identifier"
        },
        "P4022": {
            "title": "danskefilm TV series ID",
            "type": "External identifier"
        },
        "P4023": {
            "title": "DFB datacenter player ID",
            "type": "External identifier"
        },
        "P4024": {
            "title": "ADW taxon ID",
            "type": "External identifier"
        },
        "P4025": {
            "title": "Pinakothek artist ID",
            "type": "External identifier"
        },
        "P4026": {
            "title": "Cullum number",
            "type": "External identifier"
        },
        "P4027": {
            "title": "National Discography of Italian Song work ID",
            "type": "External identifier"
        },
        "P4028": {
            "title": "Google Scholar paper ID",
            "type": "External identifier"
        },
        "P4029": {
            "title": "Latvian Protected Nature Territory ID",
            "type": "External identifier"
        },
        "P403": {
            "title": "mouth of the watercourse",
            "type": "Item"
        },
        "P4030": {
            "title": "PLU Code",
            "type": "External identifier"
        },
        "P4031": {
            "title": "Hungarian NGO ID",
            "type": "External identifier"
        },
        "P4032": {
            "title": "reviewed by",
            "type": "Item"
        },
        "P4033": {
            "title": "Mastodon address",
            "type": "External identifier"
        },
        "P4034": {
            "title": "Shironet artist ID",
            "type": "External identifier"
        },
        "P4035": {
            "title": "Shironet song ID",
            "type": "External identifier"
        },
        "P4036": {
            "title": "field of view",
            "type": "Quantity"
        },
        "P4037": {
            "title": "South Australian Heritage Register Database ID",
            "type": "External identifier"
        },
        "P4038": {
            "title": "Danish List of Lights and Fog signals ID",
            "type": "External identifier"
        },
        "P404": {
            "title": "game mode",
            "type": "Item"
        },
        "P4040": {
            "title": "Rock.com.ar artist ID",
            "type": "External identifier"
        },
        "P4041": {
            "title": "Rock.com.ar album ID",
            "type": "External identifier"
        },
        "P4042": {
            "title": "ESBL athlete ID",
            "type": "External identifier"
        },
        "P4043": {
            "title": "emulates",
            "type": "Item"
        },
        "P4044": {
            "title": "therapeutic area",
            "type": "Item"
        },
        "P4045": {
            "title": "Sandbox-Tabular data",
            "type": "Tabular data"
        },
        "P4046": {
            "title": "SIMC place ID",
            "type": "External identifier"
        },
        "P4047": {
            "title": "Sandbox-Geographic shape",
            "type": "Geographic shape"
        },
        "P4048": {
            "title": "J.League manager ID",
            "type": "External identifier"
        },
        "P405": {
            "title": "taxon author",
            "type": "Item"
        },
        "P4050": {
            "title": "EspritBleu athlete ID",
            "type": "External identifier"
        },
        "P4051": {
            "title": "Ukrainian regulations base ID",
            "type": "External identifier"
        },
        "P4052": {
            "title": "Academia.edu institutional ID",
            "type": "External identifier"
        },
        "P4053": {
            "title": "Deutsche Olympiamannschaft athlete ID",
            "type": "External identifier"
        },
        "P4054": {
            "title": "Canadian Olympic Committee athlete ID",
            "type": "External identifier"
        },
        "P4055": {
            "title": "Norwegian List of Lights ID",
            "type": "External identifier"
        },
        "P4056": {
            "title": "New Zealand Olympic Committee athlete ID",
            "type": "External identifier"
        },
        "P4057": {
            "title": "Irish Sites and Monuments Record ID",
            "type": "External identifier"
        },
        "P4058": {
            "title": "FINESS medical facility ID",
            "type": "External identifier"
        },
        "P4059": {
            "title": "Irish National Monument ID",
            "type": "External identifier"
        },
        "P406": {
            "title": "soundtrack album",
            "type": "Item"
        },
        "P4060": {
            "title": "Brazilian Olympic Committee athlete ID",
            "type": "External identifier"
        },
        "P4061": {
            "title": "LTOK athlete ID",
            "type": "External identifier"
        },
        "P4062": {
            "title": "\u010cOV athlete ID",
            "type": "External identifier"
        },
        "P4063": {
            "title": "United States Olympic Committee athlete ID",
            "type": "External identifier"
        },
        "P4065": {
            "title": "COA athlete ID",
            "type": "External identifier"
        },
        "P4066": {
            "title": "MOB athlete ID",
            "type": "External identifier"
        },
        "P4067": {
            "title": "COSR athlete ID",
            "type": "External identifier"
        },
        "P4068": {
            "title": "CIS Chinese Athletes Database ID",
            "type": "External identifier"
        },
        "P4069": {
            "title": "CONI athlete ID",
            "type": "External identifier"
        },
        "P407": {
            "title": "language of work or name",
            "type": "Item"
        },
        "P4070": {
            "title": "identifier shared with",
            "type": "Item"
        },
        "P4071": {
            "title": "Zemereshet artist ID",
            "type": "External identifier"
        },
        "P4072": {
            "title": "Zemereshet song ID",
            "type": "External identifier"
        },
        "P4073": {
            "title": "Wikia wiki ID",
            "type": "External identifier"
        },
        "P4074": {
            "title": "FFN swimmer ID",
            "type": "External identifier"
        },
        "P4075": {
            "title": "Czech Monument Catalogue Number",
            "type": "External identifier"
        },
        "P4076": {
            "title": "WorldSBK.com racer identifier",
            "type": "External identifier"
        },
        "P4077": {
            "title": "Pizmonet ID",
            "type": "External identifier"
        },
        "P4078": {
            "title": "SKIP code",
            "type": "String"
        },
        "P4079": {
            "title": "Theatres Trust Database ID",
            "type": "External identifier"
        },
        "P408": {
            "title": "software engine",
            "type": "Item"
        },
        "P4080": {
            "title": "number of houses",
            "type": "Quantity"
        },
        "P4081": {
            "title": "BHL creator ID",
            "type": "External identifier"
        },
        "P4082": {
            "title": "image captured with",
            "type": "Item"
        },
        "P4083": {
            "title": "NPS unit ID",
            "type": "External identifier"
        },
        "P4084": {
            "title": "MyAnimeList people ID",
            "type": "External identifier"
        },
        "P4085": {
            "title": "MyAnimeList character ID",
            "type": "External identifier"
        },
        "P4086": {
            "title": "MyAnimeList anime ID",
            "type": "External identifier"
        },
        "P4087": {
            "title": "MyAnimeList manga ID",
            "type": "External identifier"
        },
        "P4088": {
            "title": "Irish National Inventory of Architectural Heritage ID",
            "type": "External identifier"
        },
        "P4089": {
            "title": "Global Terrorism Database ID",
            "type": "External identifier"
        },
        "P409": {
            "title": "NLA (Australia) ID",
            "type": "External identifier"
        },
        "P4090": {
            "title": "Biodiversity Repository ID",
            "type": "External identifier"
        },
        "P4091": {
            "title": "Irish Grid Reference",
            "type": "External identifier"
        },
        "P4092": {
            "title": "checksum",
            "type": "String"
        },
        "P4093": {
            "title": "Australian Statistical Geography 2016 ID",
            "type": "External identifier"
        },
        "P4094": {
            "title": "Australian Standard Geographic Classification 2006 ID",
            "type": "External identifier"
        },
        "P4095": {
            "title": "Principal Galaxies Catalogue ID",
            "type": "External identifier"
        },
        "P4096": {
            "title": "RePEc institute ID",
            "type": "External identifier"
        },
        "P4097": {
            "title": "MuseScore ID",
            "type": "External identifier"
        },
        "P4098": {
            "title": "BVMC place id",
            "type": "External identifier"
        },
        "P4099": {
            "title": "metrically compatible typeface",
            "type": "Item"
        },
        "P41": {
            "title": "flag image",
            "type": "Commons media file"
        },
        "P410": {
            "title": "military rank",
            "type": "Item"
        },
        "P4100": {
            "title": "parliamentary group",
            "type": "Item"
        },
        "P4101": {
            "title": "dissertation submitted to",
            "type": "Item"
        },
        "P4102": {
            "title": "Atlas of Hillforts ID",
            "type": "External identifier"
        },
        "P4103": {
            "title": "assets under management",
            "type": "Quantity"
        },
        "P4104": {
            "title": "Carnegie Hall agent ID",
            "type": "External identifier"
        },
        "P4105": {
            "title": "EGF rating",
            "type": "Quantity"
        },
        "P4106": {
            "title": "Finnish archaeological heritage ID",
            "type": "External identifier"
        },
        "P4107": {
            "title": "Framalibre ID",
            "type": "External identifier"
        },
        "P4108": {
            "title": "Gedbas genealogy person ID",
            "type": "External identifier"
        },
        "P4109": {
            "title": "URN-NBN",
            "type": "External identifier"
        },
        "P411": {
            "title": "canonization status",
            "type": "Item"
        },
        "P4110": {
            "title": "Crunchyroll ID",
            "type": "External identifier"
        },
        "P4111": {
            "title": "danskefilm TV Christmas calendar",
            "type": "External identifier"
        },
        "P4112": {
            "title": "danskfilmogtv person",
            "type": "External identifier"
        },
        "P4113": {
            "title": "FRED time-series ID",
            "type": "External identifier"
        },
        "P4114": {
            "title": "ADK member ID",
            "type": "External identifier"
        },
        "P4115": {
            "title": "INSPIRE ID",
            "type": "External identifier"
        },
        "P4116": {
            "title": "JewAge person ID",
            "type": "External identifier"
        },
        "P4117": {
            "title": "National Record of the Historic Environment ID",
            "type": "External identifier"
        },
        "P4118": {
            "title": "NLS-FI Geographic Name ID",
            "type": "External identifier"
        },
        "P4119": {
            "title": "NLS Geographic Names Place ID",
            "type": "External identifier"
        },
        "P412": {
            "title": "voice type",
            "type": "Item"
        },
        "P4120": {
            "title": "Ontario Heritage Act Register ID",
            "type": "External identifier"
        },
        "P4121": {
            "title": "openAIP ID",
            "type": "External identifier"
        },
        "P4122": {
            "title": "PalDat plant ID",
            "type": "External identifier"
        },
        "P4123": {
            "title": "French National Assembly ID",
            "type": "External identifier"
        },
        "P4124": {
            "title": "Who's Who in France biography ID",
            "type": "External identifier"
        },
        "P4125": {
            "title": "Titan ID",
            "type": "External identifier"
        },
        "P4126": {
            "title": "ESEC person ID",
            "type": "External identifier"
        },
        "P4127": {
            "title": "EmbassyPages.com ID",
            "type": "External identifier"
        },
        "P4128": {
            "title": "NPSN Indonesian school ID",
            "type": "External identifier"
        },
        "P4129": {
            "title": "Cinema Treasures ID",
            "type": "External identifier"
        },
        "P413": {
            "title": "position played on team / speciality",
            "type": "Item"
        },
        "P4130": {
            "title": "USHMM person ID",
            "type": "External identifier"
        },
        "P4131": {
            "title": "annual energy output",
            "type": "Quantity"
        },
        "P4132": {
            "title": "linguistic typology",
            "type": "Item"
        },
        "P4133": {
            "title": "Patrimonioculturale-ER ID",
            "type": "External identifier"
        },
        "P4135": {
            "title": "maximum age",
            "type": "Quantity"
        },
        "P4136": {
            "title": "WIGOS station ID",
            "type": "External identifier"
        },
        "P4137": {
            "title": "muzzle velocity",
            "type": "Quantity"
        },
        "P4138": {
            "title": "Treasury of Lives ID",
            "type": "External identifier"
        },
        "P4139": {
            "title": "National Assembly of Nigeria ID",
            "type": "External identifier"
        },
        "P414": {
            "title": "stock exchange",
            "type": "Item"
        },
        "P4140": {
            "title": "energy storage capacity",
            "type": "Quantity"
        },
        "P4141": {
            "title": "Gatehouse Gazetteer place ID",
            "type": "External identifier"
        },
        "P4142": {
            "title": "RIWAQ Registry of Historic Buildings in Palestine ID",
            "type": "External identifier"
        },
        "P4143": {
            "title": "Finnish List of Lights ID",
            "type": "External identifier"
        },
        "P4144": {
            "title": "Atheneum artwork ID",
            "type": "External identifier"
        },
        "P4145": {
            "title": "Atheneum person ID",
            "type": "External identifier"
        },
        "P4146": {
            "title": "Atheneum museum ID",
            "type": "External identifier"
        },
        "P4147": {
            "title": "conjugate acid",
            "type": "Item"
        },
        "P4149": {
            "title": "conjugate base",
            "type": "Item"
        },
        "P415": {
            "title": "radio format",
            "type": "Item"
        },
        "P4150": {
            "title": "weather history",
            "type": "Tabular data"
        },
        "P4151": {
            "title": "game mechanics",
            "type": "Item"
        },
        "P4152": {
            "title": "file format identification pattern",
            "type": "String"
        },
        "P4153": {
            "title": "offset",
            "type": "Quantity"
        },
        "P4154": {
            "title": "National Forest Foundation ID",
            "type": "External identifier"
        },
        "P4155": {
            "title": "separator",
            "type": "Property"
        },
        "P4156": {
            "title": "Czech Registration ID",
            "type": "External identifier"
        },
        "P4157": {
            "title": "MEG ID",
            "type": "External identifier"
        },
        "P4158": {
            "title": "autores.ar id",
            "type": "External identifier"
        },
        "P4159": {
            "title": "WeRelate person ID",
            "type": "External identifier"
        },
        "P416": {
            "title": "quantity symbol",
            "type": "String"
        },
        "P4160": {
            "title": "Michelin Restaurants ID",
            "type": "External identifier"
        },
        "P4161": {
            "title": "Michelin Voyages ID",
            "type": "External identifier"
        },
        "P4162": {
            "title": "AUR package",
            "type": "External identifier"
        },
        "P4163": {
            "title": "magnification",
            "type": "Quantity"
        },
        "P4164": {
            "title": "National Baseball Hall of Fame and Museum ID",
            "type": "External identifier"
        },
        "P4165": {
            "title": "CODECS ID",
            "type": "External identifier"
        },
        "P4166": {
            "title": "Georgian National Register of Monuments ID",
            "type": "External identifier"
        },
        "P4167": {
            "title": "Dagens N\u00e6ringsliv topic ID",
            "type": "External identifier"
        },
        "P4168": {
            "title": "IEDB Epitope ID",
            "type": "External identifier"
        },
        "P4169": {
            "title": "YCBA agent ID",
            "type": "External identifier"
        },
        "P417": {
            "title": "patron saint",
            "type": "Item"
        },
        "P4170": {
            "title": "eParks unit ID",
            "type": "External identifier"
        },
        "P4171": {
            "title": "World Heritage Tentative List ID",
            "type": "External identifier"
        },
        "P4172": {
            "title": "America's Byways road ID",
            "type": "External identifier"
        },
        "P4173": {
            "title": "Instagram location ID",
            "type": "External identifier"
        },
        "P4174": {
            "title": "Wikimedia username",
            "type": "External identifier"
        },
        "P4175": {
            "title": "Patreon ID",
            "type": "External identifier"
        },
        "P4176": {
            "title": "effective firing range",
            "type": "Quantity"
        },
        "P4177": {
            "title": "Finnish National Gallery artist ID",
            "type": "External identifier"
        },
        "P4178": {
            "title": "Beazley Archive Pottery Database ID",
            "type": "External identifier"
        },
        "P4179": {
            "title": "tabular population",
            "type": "Tabular data"
        },
        "P418": {
            "title": "seal description",
            "type": "Item"
        },
        "P4180": {
            "title": "GujLit Person ID",
            "type": "External identifier"
        },
        "P4181": {
            "title": "GujLit Book ID",
            "type": "External identifier"
        },
        "P4182": {
            "title": "National Natural Landmarks site ID",
            "type": "External identifier"
        },
        "P4183": {
            "title": "angle from vertical",
            "type": "Quantity"
        },
        "P4184": {
            "title": "slope",
            "type": "Quantity"
        },
        "P4185": {
            "title": "has attribute",
            "type": "Item"
        },
        "P4186": {
            "title": "Australian Women's Register ID",
            "type": "External identifier"
        },
        "P4187": {
            "title": "Wylie transliteration",
            "type": "String"
        },
        "P4188": {
            "title": "Tibetan pinyin",
            "type": "String"
        },
        "P4189": {
            "title": "THL Simplified Phonetic Transcription",
            "type": "String"
        },
        "P4190": {
            "title": "Rivers.gov protected area ID",
            "type": "External identifier"
        },
        "P4191": {
            "title": "Alljudo athlete ID",
            "type": "External identifier"
        },
        "P4192": {
            "title": "LNH player ID",
            "type": "External identifier"
        },
        "P4193": {
            "title": "Familypedia person ID",
            "type": "External identifier"
        },
        "P4194": {
            "title": "CNPS ID",
            "type": "External identifier"
        },
        "P4195": {
            "title": "category for employees of the organization",
            "type": "Item"
        },
        "P4196": {
            "title": "cytogenetic location",
            "type": "String"
        },
        "P4197": {
            "title": "IBM graphic character set global ID",
            "type": "External identifier"
        },
        "P4198": {
            "title": "Google Play Music artist ID",
            "type": "External identifier"
        },
        "P4199": {
            "title": "Google Play Music album ID",
            "type": "External identifier"
        },
        "P4200": {
            "title": "Christie's creator ID",
            "type": "External identifier"
        },
        "P4201": {
            "title": "PagesJaunes ID",
            "type": "External identifier"
        },
        "P4202": {
            "title": "WFD Chemical status",
            "type": "Item"
        },
        "P4203": {
            "title": "ROARMAP ID",
            "type": "External identifier"
        },
        "P4204": {
            "title": "The Times of India topic ID",
            "type": "External identifier"
        },
        "P4206": {
            "title": "FOIH person ID",
            "type": "External identifier"
        },
        "P4207": {
            "title": "Italian National Earthquake Center ID",
            "type": "External identifier"
        },
        "P4208": {
            "title": "Billboard artist ID",
            "type": "External identifier"
        },
        "P4209": {
            "title": "danskfilmogtv title ID",
            "type": "External identifier"
        },
        "P421": {
            "title": "located in time zone",
            "type": "Item"
        },
        "P4210": {
            "title": "Bashkir encyclopedia (Bashkir version) ID",
            "type": "External identifier"
        },
        "P4211": {
            "title": "Bashkir encyclopedia (Russian version) ID",
            "type": "External identifier"
        },
        "P4212": {
            "title": "PACTOLS thesaurus ID",
            "type": "External identifier"
        },
        "P4213": {
            "title": "Unicode hex codepoint",
            "type": "String"
        },
        "P4214": {
            "title": "highest observed lifespan",
            "type": "Quantity"
        },
        "P4215": {
            "title": "nLab ID",
            "type": "External identifier"
        },
        "P4216": {
            "title": "LNB Pro A player ID",
            "type": "External identifier"
        },
        "P4217": {
            "title": "UK Electoral Commission ID",
            "type": "External identifier"
        },
        "P4218": {
            "title": "shelf life",
            "type": "Quantity"
        },
        "P4219": {
            "title": "Tyrolean Art Cadastre inventory ID",
            "type": "External identifier"
        },
        "P4220": {
            "title": "order of battle",
            "type": "Item"
        },
        "P4221": {
            "title": "National Criminal Justice ID",
            "type": "External identifier"
        },
        "P4222": {
            "title": "United Nations Treaty Series Volume Number",
            "type": "External identifier"
        },
        "P4223": {
            "title": "Enciclopedia Italiana ID",
            "type": "External identifier"
        },
        "P4224": {
            "title": "category contains",
            "type": "Item"
        },
        "P4225": {
            "title": "IPA Braille",
            "type": "String"
        },
        "P4226": {
            "title": "Cyworld ID",
            "type": "External identifier"
        },
        "P4227": {
            "title": "Indonesian Small Islands Directory ID",
            "type": "External identifier"
        },
        "P4228": {
            "title": "Encyclopedia of Australian Science ID",
            "type": "External identifier"
        },
        "P4229": {
            "title": "ICD-10-CM",
            "type": "External identifier"
        },
        "P423": {
            "title": "shooting handedness",
            "type": "Item"
        },
        "P4230": {
            "title": "Sefaria ID",
            "type": "External identifier"
        },
        "P4231": {
            "title": "United Nations Treaty Series Registration Number",
            "type": "External identifier"
        },
        "P4232": {
            "title": "Figshare author ID",
            "type": "External identifier"
        },
        "P4233": {
            "title": "PatientLikeMe condition ID",
            "type": "External identifier"
        },
        "P4235": {
            "title": "PatientLikeMe treatment ID",
            "type": "External identifier"
        },
        "P4236": {
            "title": "PatientLikeMe symptom ID",
            "type": "External identifier"
        },
        "P4237": {
            "title": "Heritage Building in Finland ID",
            "type": "External identifier"
        },
        "P4238": {
            "title": "webcam page URL",
            "type": "URL"
        },
        "P4239": {
            "title": "vocalized name",
            "type": "Monolingual text"
        },
        "P424": {
            "title": "Wikimedia language code",
            "type": "String"
        },
        "P4240": {
            "title": "regular expression syntax",
            "type": "Item"
        },
        "P4241": {
            "title": "refine date",
            "type": "Item"
        },
        "P4242": {
            "title": "maximal rate of climb",
            "type": "Quantity"
        },
        "P4243": {
            "title": "candidate number",
            "type": "String"
        },
        "P4244": {
            "title": "Bavarian monument authority ID",
            "type": "External identifier"
        },
        "P4245": {
            "title": "cultural heritage monument in Serbia ID",
            "type": "External identifier"
        },
        "P4246": {
            "title": "LfD-HB object ID",
            "type": "External identifier"
        },
        "P4247": {
            "title": "Tagesschau election ID",
            "type": "External identifier"
        },
        "P4248": {
            "title": "The Black Book ID",
            "type": "External identifier"
        },
        "P4249": {
            "title": "Vincoli in Rete ID",
            "type": "External identifier"
        },
        "P425": {
            "title": "field of this occupation",
            "type": "Item"
        },
        "P4250": {
            "title": "defined daily dose",
            "type": "Quantity"
        },
        "P4251": {
            "title": "TSE number",
            "type": "External identifier"
        },
        "P4252": {
            "title": "All-Russian Mathematical Portal ID",
            "type": "External identifier"
        },
        "P4253": {
            "title": "number of constituencies",
            "type": "Quantity"
        },
        "P4254": {
            "title": "Banglapedia (Bengali version) ID",
            "type": "External identifier"
        },
        "P4255": {
            "title": "Banglapedia (English version) ID",
            "type": "External identifier"
        },
        "P4256": {
            "title": "Spanish \"Bolet\u00edn Oficial del Estado\" ID",
            "type": "External identifier"
        },
        "P4257": {
            "title": "National Museums of Japan e-museum ID",
            "type": "External identifier"
        },
        "P4258": {
            "title": "Gallica ID",
            "type": "External identifier"
        },
        "P4259": {
            "title": "Lega Pallavolo Serie A Femminile player ID",
            "type": "External identifier"
        },
        "P426": {
            "title": "aircraft registration",
            "type": "String"
        },
        "P4260": {
            "title": "NPB player ID",
            "type": "External identifier"
        },
        "P4261": {
            "title": "FFVoile sailor ID",
            "type": "External identifier"
        },
        "P4262": {
            "title": "Footof\u00e9minin.fr player ID",
            "type": "External identifier"
        },
        "P4263": {
            "title": "THW Kiel player ID",
            "type": "External identifier"
        },
        "P4264": {
            "title": "LinkedIn company ID",
            "type": "External identifier"
        },
        "P4265": {
            "title": "Reddit username",
            "type": "External identifier"
        },
        "P4266": {
            "title": "Bavarian geotope ID",
            "type": "External identifier"
        },
        "P4267": {
            "title": "Landtag of Liechtenstein ID",
            "type": "External identifier"
        },
        "P4268": {
            "title": "half maximal inhibitory concentration (IC50)",
            "type": "Quantity"
        },
        "P427": {
            "title": "taxonomic type",
            "type": "Item"
        },
        "P4270": {
            "title": "Daum TV series ID",
            "type": "External identifier"
        },
        "P4271": {
            "title": "rating",
            "type": "Item"
        },
        "P4272": {
            "title": "DPLA subject ID",
            "type": "External identifier"
        },
        "P4273": {
            "title": "New York City Landmarks Preservation Commission ID",
            "type": "External identifier"
        },
        "P4274": {
            "title": "Tunisian geographic code",
            "type": "External identifier"
        },
        "P4275": {
            "title": "Japanese Database of National important cultural properties",
            "type": "External identifier"
        },
        "P4276": {
            "title": "Cin\u00e9math\u00e8que qu\u00e9b\u00e9coise work identifier",
            "type": "External identifier"
        },
        "P4277": {
            "title": "Daum movie ID",
            "type": "External identifier"
        },
        "P4278": {
            "title": "FCI rider ID",
            "type": "External identifier"
        },
        "P4279": {
            "title": "hydrological order number",
            "type": "External identifier"
        },
        "P428": {
            "title": "botanist author abbreviation",
            "type": "External identifier"
        },
        "P4280": {
            "title": "International Standard Text Code",
            "type": "External identifier"
        },
        "P4281": {
            "title": "LNV player ID",
            "type": "External identifier"
        },
        "P4282": {
            "title": "LUMIERE film ID",
            "type": "External identifier"
        },
        "P4283": {
            "title": "LUMIERE director ID",
            "type": "External identifier"
        },
        "P4284": {
            "title": "Nominis given name ID",
            "type": "External identifier"
        },
        "P4285": {
            "title": "Theses.fr person ID",
            "type": "External identifier"
        },
        "P4286": {
            "title": "Nominis saint ID",
            "type": "External identifier"
        },
        "P4287": {
            "title": "Riigikogu ID",
            "type": "External identifier"
        },
        "P4288": {
            "title": "UK National Fruit Collection ID",
            "type": "External identifier"
        },
        "P4289": {
            "title": "LFH player ID",
            "type": "External identifier"
        },
        "P429": {
            "title": "dantai code",
            "type": "External identifier"
        },
        "P4290": {
            "title": "official app",
            "type": "Item"
        },
        "P4291": {
            "title": "panorama view",
            "type": "Commons media file"
        },
        "P4292": {
            "title": "possessed by spirit",
            "type": "Item"
        },
        "P4293": {
            "title": "PM20 folder ID",
            "type": "External identifier"
        },
        "P4294": {
            "title": "PROSPERO ID",
            "type": "External identifier"
        },
        "P4295": {
            "title": "readership",
            "type": "Quantity"
        },
        "P4296": {
            "title": "stellar rotational velocity",
            "type": "Quantity"
        },
        "P4297": {
            "title": "MIL-STD-2525 Symbol Identification Code",
            "type": "External identifier"
        },
        "P4298": {
            "title": "VBL player ID",
            "type": "External identifier"
        },
        "P4299": {
            "title": "Wheelchair ITF player ID",
            "type": "External identifier"
        },
        "P4300": {
            "title": "YouTube playlist ID",
            "type": "External identifier"
        },
        "P4301": {
            "title": "PfaF id",
            "type": "External identifier"
        },
        "P4302": {
            "title": "KNAU ID",
            "type": "External identifier"
        },
        "P4303": {
            "title": "Lega Pallavolo Serie A player ID",
            "type": "External identifier"
        },
        "P4304": {
            "title": "FOIH materials ID",
            "type": "External identifier"
        },
        "P4305": {
            "title": "FOIH styles and cultures ID",
            "type": "External identifier"
        },
        "P4306": {
            "title": "FOIH periods ID",
            "type": "External identifier"
        },
        "P4307": {
            "title": "FOIH heritage types ID",
            "type": "External identifier"
        },
        "P4308": {
            "title": "FOIH value types ID",
            "type": "External identifier"
        },
        "P4309": {
            "title": "FOIH event types ID",
            "type": "External identifier"
        },
        "P4310": {
            "title": "FOIH decree types ID",
            "type": "External identifier"
        },
        "P4311": {
            "title": "FOIH taxon ID",
            "type": "External identifier"
        },
        "P4312": {
            "title": "camera setup",
            "type": "Item"
        },
        "P4313": {
            "title": "mus\u00e9e de Bretagne identifiant collections ID",
            "type": "External identifier"
        },
        "P4314": {
            "title": "SpeedskatingResults.com speed skater ID",
            "type": "External identifier"
        },
        "P4315": {
            "title": "SwimSwam ID",
            "type": "External identifier"
        },
        "P4316": {
            "title": "kinship equivalent in SPARQL at Wikidata",
            "type": "String"
        },
        "P4317": {
            "title": "GARD rare disease ID",
            "type": "External identifier"
        },
        "P4318": {
            "title": "Scottish Sports HoF athlete ID",
            "type": "External identifier"
        },
        "P4319": {
            "title": "Elite Prospects staff ID",
            "type": "External identifier"
        },
        "P432": {
            "title": "callsign of airline",
            "type": "External identifier"
        },
        "P4320": {
            "title": "mountains classification",
            "type": "Item"
        },
        "P4321": {
            "title": "best combative classification",
            "type": "Item"
        },
        "P4322": {
            "title": "best sprinter classification",
            "type": "Item"
        },
        "P4323": {
            "title": "young rider classification",
            "type": "Item"
        },
        "P4324": {
            "title": "combination classification",
            "type": "Item"
        },
        "P4325": {
            "title": "APA phoneme code",
            "type": "String"
        },
        "P4326": {
            "title": "BFI-Filmography person ID",
            "type": "External identifier"
        },
        "P4327": {
            "title": "BHL bibliography ID",
            "type": "External identifier"
        },
        "P4328": {
            "title": "Brueckenweb ID",
            "type": "External identifier"
        },
        "P4329": {
            "title": "Wikimedia template that populates this category",
            "type": "Item"
        },
        "P433": {
            "title": "issue",
            "type": "String"
        },
        "P4330": {
            "title": "contains",
            "type": "Item"
        },
        "P4331": {
            "title": "Department of Education and Skills roll number",
            "type": "External identifier"
        },
        "P4332": {
            "title": "Deutsche Synchronkartei actor-ID",
            "type": "External identifier"
        },
        "P4333": {
            "title": "GenBank Assembly accession",
            "type": "External identifier"
        },
        "P4334": {
            "title": "Heritage Conservation District of Ontario ID",
            "type": "External identifier"
        },
        "P4335": {
            "title": "IDESCAT territorial code in Catalonia",
            "type": "External identifier"
        },
        "P4336": {
            "title": "Lloyd's Register Ship ID",
            "type": "External identifier"
        },
        "P4337": {
            "title": "digitised page from Lloyd's Register of Ships from 1930 to 1945",
            "type": "External identifier"
        },
        "P4338": {
            "title": "LOINC ID",
            "type": "External identifier"
        },
        "P4339": {
            "title": "Radio Radicale organization ID",
            "type": "External identifier"
        },
        "P434": {
            "title": "MusicBrainz artist ID",
            "type": "External identifier"
        },
        "P4340": {
            "title": "PubsHistory pub ID",
            "type": "External identifier"
        },
        "P4341": {
            "title": "synodic period",
            "type": "Quantity"
        },
        "P4342": {
            "title": "Store norske leksikon ID",
            "type": "External identifier"
        },
        "P4343": {
            "title": "WBPLN author ID",
            "type": "External identifier"
        },
        "P4344": {
            "title": "QEdu ID",
            "type": "External identifier"
        },
        "P4345": {
            "title": "excavation director",
            "type": "Item"
        },
        "P4346": {
            "title": "T4T35 megalith ID",
            "type": "External identifier"
        },
        "P4347": {
            "title": "Florida Sports Hall of Fame athlete ID",
            "type": "External identifier"
        },
        "P4348": {
            "title": "Lotsawa House Tibetan author ID",
            "type": "External identifier"
        },
        "P4349": {
            "title": "Lotsawa House Indian author ID",
            "type": "External identifier"
        },
        "P435": {
            "title": "MusicBrainz work ID",
            "type": "External identifier"
        },
        "P4350": {
            "title": "salinity",
            "type": "Quantity"
        },
        "P4351": {
            "title": "Cravo Albin artist ID",
            "type": "External identifier"
        },
        "P4352": {
            "title": "BillionGraves cemetery ID",
            "type": "External identifier"
        },
        "P4353": {
            "title": "nominated by",
            "type": "Item"
        },
        "P4354": {
            "title": "search formatter URL",
            "type": "String"
        },
        "P4355": {
            "title": "PROSITE documentation ID",
            "type": "External identifier"
        },
        "P4356": {
            "title": "Megalithic Portal ID",
            "type": "External identifier"
        },
        "P4357": {
            "title": "Musikverket person ID",
            "type": "External identifier"
        },
        "P4358": {
            "title": "Dutch lost building register ID",
            "type": "External identifier"
        },
        "P4359": {
            "title": "gravsted.dk ID",
            "type": "External identifier"
        },
        "P436": {
            "title": "MusicBrainz release group ID",
            "type": "External identifier"
        },
        "P4360": {
            "title": "Monumentos de S\u00e3o Paulo ID",
            "type": "External identifier"
        },
        "P4361": {
            "title": "ExecutedToday ID",
            "type": "External identifier"
        },
        "P4362": {
            "title": "ASHOF athlete ID",
            "type": "External identifier"
        },
        "P4363": {
            "title": "DSMHOF athlete ID",
            "type": "External identifier"
        },
        "P4364": {
            "title": "Georgia Sports Hall of Fame ID",
            "type": "External identifier"
        },
        "P4365": {
            "title": "Hawai\u2018i Sports Hall of Fame ID",
            "type": "External identifier"
        },
        "P4366": {
            "title": "Kansas Sports Hall of Fame ID",
            "type": "External identifier"
        },
        "P4367": {
            "title": "Louisiana Sports Hall of Fame ID",
            "type": "External identifier"
        },
        "P4368": {
            "title": "Mississippi Sports Hall of Fame ID",
            "type": "External identifier"
        },
        "P4369": {
            "title": "Cairn author ID",
            "type": "External identifier"
        },
        "P437": {
            "title": "distribution",
            "type": "Item"
        },
        "P4370": {
            "title": "KBO hitter ID",
            "type": "External identifier"
        },
        "P4371": {
            "title": "KBO pitcher ID",
            "type": "External identifier"
        },
        "P4372": {
            "title": "Infopatrim\u00f4nio ID",
            "type": "External identifier"
        },
        "P4373": {
            "title": "National Trust Collections ID",
            "type": "External identifier"
        },
        "P4374": {
            "title": "New Mexico Sports Hall of Fame ID",
            "type": "External identifier"
        },
        "P4375": {
            "title": "North Carolina Sports Hall of Fame ID",
            "type": "External identifier"
        },
        "P4376": {
            "title": "Oklahoma Sports Hall of Fame ID",
            "type": "External identifier"
        },
        "P4377": {
            "title": "Women's Sports Foundation ID",
            "type": "External identifier"
        },
        "P4379": {
            "title": "youth wing",
            "type": "Item"
        },
        "P4380": {
            "title": "Sandrart.net artwork ID",
            "type": "External identifier"
        },
        "P4381": {
            "title": "Soccerdonna player ID",
            "type": "External identifier"
        },
        "P4382": {
            "title": "LFB player ID",
            "type": "External identifier"
        },
        "P4383": {
            "title": "Tennessee Sports Hall of Fame athlete ID",
            "type": "External identifier"
        },
        "P4384": {
            "title": "DAMIT asteroid ID",
            "type": "External identifier"
        },
        "P4385": {
            "title": "Missouri Sports Hall of Fame ID",
            "type": "External identifier"
        },
        "P4386": {
            "title": "Virginia Sports Hall of Fame ID",
            "type": "External identifier"
        },
        "P4387": {
            "title": "update method",
            "type": "Item"
        },
        "P4388": {
            "title": "Mappy place ID",
            "type": "External identifier"
        },
        "P4389": {
            "title": "Science Museum people ID",
            "type": "External identifier"
        },
        "P439": {
            "title": "German municipality key",
            "type": "External identifier"
        },
        "P4390": {
            "title": "mapping relation type",
            "type": "Item"
        },
        "P4391": {
            "title": "TheSports.org athlete ID",
            "type": "External identifier"
        },
        "P4392": {
            "title": "BC Sports Hall of Fame athlete ID",
            "type": "External identifier"
        },
        "P4393": {
            "title": "Anvisa drug ID",
            "type": "External identifier"
        },
        "P4394": {
            "title": "NeuroNames ID (plain mode)",
            "type": "External identifier"
        },
        "P4395": {
            "title": "BrainInfo ID (hierarchical)",
            "type": "External identifier"
        },
        "P4396": {
            "title": "Alberta Sports Hall of Fame and Museum athlete ID",
            "type": "External identifier"
        },
        "P4397": {
            "title": "International Paralympic Committee athlete ID",
            "type": "External identifier"
        },
        "P4398": {
            "title": "Canada's Sports Hall of Fame athlete ID",
            "type": "External identifier"
        },
        "P4399": {
            "title": "Enciclop\u00e9dia Ita\u00fa Cultural ID",
            "type": "External identifier"
        },
        "P440": {
            "title": "German district key",
            "type": "External identifier"
        },
        "P4400": {
            "title": "Mem\u00f3ria Globo",
            "type": "External identifier"
        },
        "P4401": {
            "title": "Museus.br ID",
            "type": "External identifier"
        },
        "P4402": {
            "title": "Women's Collegiate Tennis Hall of Fame ID",
            "type": "External identifier"
        },
        "P4403": {
            "title": "caliber",
            "type": "Quantity"
        },
        "P4404": {
            "title": "MusicBrainz recording ID",
            "type": "External identifier"
        },
        "P4405": {
            "title": "NLBPA ID",
            "type": "External identifier"
        },
        "P4406": {
            "title": "Nova Scotia Sport Hall of Fame ID",
            "type": "External identifier"
        },
        "P4407": {
            "title": "Opera Vivra singer ID",
            "type": "External identifier"
        },
        "P4408": {
            "title": "sports.ru player ID",
            "type": "External identifier"
        },
        "P4409": {
            "title": "Baseball Almanac ID",
            "type": "External identifier"
        },
        "P4410": {
            "title": "Women's Basketball Hall of Fame ID",
            "type": "External identifier"
        },
        "P4411": {
            "title": "Quora username",
            "type": "External identifier"
        },
        "P4412": {
            "title": "Ontario Sports Hall of Fame athlete ID",
            "type": "External identifier"
        },
        "P4413": {
            "title": "Manitoba Sports Hall of Fame athlete ID",
            "type": "External identifier"
        },
        "P4414": {
            "title": "New Brunswick Sports Hall of Fame athlete ID",
            "type": "External identifier"
        },
        "P4415": {
            "title": "Sport Australia Hall of Fame inductee ID",
            "type": "External identifier"
        },
        "P4416": {
            "title": "Panth\u00e9on des sports du Qu\u00e9bec ID",
            "type": "External identifier"
        },
        "P4417": {
            "title": "rfpl.org player ID",
            "type": "External identifier"
        },
        "P4418": {
            "title": "New Zealand Sports Hall of Fame ID",
            "type": "External identifier"
        },
        "P4419": {
            "title": "Videolectures ID",
            "type": "External identifier"
        },
        "P442": {
            "title": "China administrative division code",
            "type": "External identifier"
        },
        "P4421": {
            "title": "Sportbox.ru ID",
            "type": "External identifier"
        },
        "P4422": {
            "title": "U.S. Ski and Snowboard Hall of Fame athlete ID",
            "type": "External identifier"
        },
        "P4423": {
            "title": "Portuguese lighthouse ID",
            "type": "External identifier"
        },
        "P4424": {
            "title": "mandates",
            "type": "Item"
        },
        "P4425": {
            "title": "mtDNA haplogroup",
            "type": "Item"
        },
        "P4426": {
            "title": "Y-DNA Haplogroup",
            "type": "Item"
        },
        "P4427": {
            "title": "GACS ID",
            "type": "External identifier"
        },
        "P4428": {
            "title": "implementation of",
            "type": "Item"
        },
        "P4429": {
            "title": "Pro14 player ID",
            "type": "External identifier"
        },
        "P443": {
            "title": "pronunciation audio",
            "type": "Commons media file"
        },
        "P4430": {
            "title": "New York City Parks Monument ID",
            "type": "External identifier"
        },
        "P4431": {
            "title": "Google Doodle",
            "type": "External identifier"
        },
        "P4432": {
            "title": "AKL Online Artist ID",
            "type": "External identifier"
        },
        "P4433": {
            "title": "Indian Foundation for Butterflies ID",
            "type": "External identifier"
        },
        "P4434": {
            "title": "LesBiographies.com ID",
            "type": "External identifier"
        },
        "P4435": {
            "title": "snap package",
            "type": "External identifier"
        },
        "P4436": {
            "title": "The Coptic Library ID",
            "type": "External identifier"
        },
        "P4437": {
            "title": "FPB rating",
            "type": "Item"
        },
        "P4438": {
            "title": "BFI Film and TV ID",
            "type": "External identifier"
        },
        "P4439": {
            "title": "MNCARS artist ID",
            "type": "External identifier"
        },
        "P444": {
            "title": "review score",
            "type": "String"
        },
        "P4440": {
            "title": "Biblioteca Nacional de M\u00e9xico ID",
            "type": "External identifier"
        },
        "P4441": {
            "title": "hydraulic head",
            "type": "Quantity"
        },
        "P4442": {
            "title": "mean age",
            "type": "Quantity"
        },
        "P4443": {
            "title": "card network",
            "type": "Item"
        },
        "P4444": {
            "title": "reward",
            "type": "Item"
        },
        "P4445": {
            "title": "grace period",
            "type": "Quantity"
        },
        "P4446": {
            "title": "reward program",
            "type": "Item"
        },
        "P4447": {
            "title": "Minimum Spend Bonus",
            "type": "Quantity"
        },
        "P4448": {
            "title": "cash back",
            "type": "Quantity"
        },
        "P4449": {
            "title": "Shirat Nashim person ID",
            "type": "External identifier"
        },
        "P4450": {
            "title": "HAL author ID",
            "type": "External identifier"
        },
        "P4451": {
            "title": "Scoresway handball person ID",
            "type": "External identifier"
        },
        "P4452": {
            "title": "Thibaudeau classification",
            "type": "Item"
        },
        "P4453": {
            "title": "Argentine Senate member ID",
            "type": "External identifier"
        },
        "P4454": {
            "title": "Argentine Chamber of Deputies ID",
            "type": "External identifier"
        },
        "P4455": {
            "title": "Coinage of the Roman Republic Online ID",
            "type": "External identifier"
        },
        "P4456": {
            "title": "Internet Off-Broadway Database ID",
            "type": "External identifier"
        },
        "P4457": {
            "title": "Discography of American Historical Recordings ID",
            "type": "External identifier"
        },
        "P4458": {
            "title": "Dutch Cemetery in Chinsurah person ID",
            "type": "External identifier"
        },
        "P4459": {
            "title": "Dictionary of Spanish Biography ID",
            "type": "External identifier"
        },
        "P4460": {
            "title": "Kaitai Struct format gallery ID",
            "type": "External identifier"
        },
        "P4461": {
            "title": "World Golf Hall of Fame player ID",
            "type": "External identifier"
        },
        "P4462": {
            "title": "Canadian Baseball Hall of Fame inductee ID",
            "type": "External identifier"
        },
        "P4463": {
            "title": "Canadian Ski Hall of Fame inductee ID",
            "type": "External identifier"
        },
        "P4464": {
            "title": "Rugby League Project player ID",
            "type": "External identifier"
        },
        "P4465": {
            "title": "Ecole des chartes thesis abstract ID",
            "type": "External identifier"
        },
        "P4466": {
            "title": "Unified Astronomy Thesaurus ID",
            "type": "External identifier"
        },
        "P4467": {
            "title": "Twitch game ID",
            "type": "External identifier"
        },
        "P4468": {
            "title": "Mountain Bike Hall of Fame inductee ID",
            "type": "External identifier"
        },
        "P4469": {
            "title": "IGHOF athlete ID",
            "type": "External identifier"
        },
        "P447": {
            "title": "score by",
            "type": "Item"
        },
        "P4470": {
            "title": "British Bobsleigh & Skeleton Association ID",
            "type": "External identifier"
        },
        "P4471": {
            "title": "Rush Parliamentary Archive ID",
            "type": "External identifier"
        },
        "P4472": {
            "title": "Czech Jockey Club horse ID",
            "type": "External identifier"
        },
        "P4473": {
            "title": "Melon artist ID",
            "type": "External identifier"
        },
        "P4474": {
            "title": "IBHOF boxer ID",
            "type": "External identifier"
        },
        "P4475": {
            "title": "European Fencing Confederation athlete ID",
            "type": "External identifier"
        },
        "P4476": {
            "title": "Australian Baseball League player ID",
            "type": "External identifier"
        },
        "P4477": {
            "title": "Humble Store ID",
            "type": "External identifier"
        },
        "P4478": {
            "title": "Survey of Scottish Witchcraft - Accused witch ID",
            "type": "External identifier"
        },
        "P4479": {
            "title": "INDUCKS character ID",
            "type": "External identifier"
        },
        "P4480": {
            "title": "INDUCKS publication ID",
            "type": "External identifier"
        },
        "P4481": {
            "title": "INDUCKS creator ID",
            "type": "External identifier"
        },
        "P4482": {
            "title": "INDUCKS publisher ID",
            "type": "External identifier"
        },
        "P4483": {
            "title": "INDUCKS story ID",
            "type": "External identifier"
        },
        "P4484": {
            "title": "INDUCKS issue ID",
            "type": "External identifier"
        },
        "P4485": {
            "title": "INDUCKS miniseries ID",
            "type": "External identifier"
        },
        "P4486": {
            "title": "Google Play developer ID",
            "type": "External identifier"
        },
        "P4487": {
            "title": "Camera Decision ID",
            "type": "External identifier"
        },
        "P4488": {
            "title": "COAM architect ID",
            "type": "External identifier"
        },
        "P4489": {
            "title": "HOC athlete ID",
            "type": "External identifier"
        },
        "P449": {
            "title": "original network",
            "type": "Item"
        },
        "P4490": {
            "title": "Team GB athlete ID",
            "type": "External identifier"
        },
        "P4491": {
            "title": "Isidore ID",
            "type": "External identifier"
        },
        "P4493": {
            "title": "Barbarian F.C. ID",
            "type": "External identifier"
        },
        "P4494": {
            "title": "Barbarian R.C. ID",
            "type": "External identifier"
        },
        "P4495": {
            "title": "Xenopus Anatomical Ontology ID",
            "type": "External identifier"
        },
        "P4496": {
            "title": "NACE code",
            "type": "String"
        },
        "P4497": {
            "title": "Microsoft Store artist ID",
            "type": "External identifier"
        },
        "P4498": {
            "title": "World Snooker athlete ID",
            "type": "External identifier"
        },
        "P450": {
            "title": "astronaut mission",
            "type": "Item"
        },
        "P4500": {
            "title": "family relationship degree",
            "type": "Quantity"
        },
        "P4501": {
            "title": "albedo",
            "type": "Quantity"
        },
        "P4502": {
            "title": "Snooker.org player ID",
            "type": "External identifier"
        },
        "P4503": {
            "title": "Wimbledon player ID",
            "type": "External identifier"
        },
        "P4504": {
            "title": "IWRP athlete ID",
            "type": "External identifier"
        },
        "P4505": {
            "title": "IAFD male performer ID",
            "type": "External identifier"
        },
        "P4506": {
            "title": "Formal Public Identifier",
            "type": "String"
        },
        "P4507": {
            "title": "California Sports Hall of Fame athlete ID",
            "type": "External identifier"
        },
        "P4508": {
            "title": "CycleBase cyclist ID",
            "type": "External identifier"
        },
        "P4509": {
            "title": "National Monuments of Namibia Site Reference",
            "type": "External identifier"
        },
        "P451": {
            "title": "partner",
            "type": "Item"
        },
        "P4510": {
            "title": "describes a project that uses",
            "type": "Item"
        },
        "P4511": {
            "title": "vertical depth",
            "type": "Quantity"
        },
        "P4512": {
            "title": "Scottish Cemetery Kolkata person ID",
            "type": "External identifier"
        },
        "P4513": {
            "title": "Africultures movie ID",
            "type": "External identifier"
        },
        "P4514": {
            "title": "Africultures person ID",
            "type": "External identifier"
        },
        "P4515": {
            "title": "Prisma ID",
            "type": "External identifier"
        },
        "P4516": {
            "title": "M\u00e9moire du cyclisme cyclist ID",
            "type": "External identifier"
        },
        "P4517": {
            "title": "ctext work ID",
            "type": "External identifier"
        },
        "P4518": {
            "title": "Melon album ID",
            "type": "External identifier"
        },
        "P4519": {
            "title": "payload mass",
            "type": "Quantity"
        },
        "P452": {
            "title": "industry",
            "type": "Item"
        },
        "P4520": {
            "title": "SUNCAT ID",
            "type": "External identifier"
        },
        "P4521": {
            "title": "Radio Radicale person ID",
            "type": "External identifier"
        },
        "P4522": {
            "title": "Alaska Sports Hall of Fame athlete ID",
            "type": "External identifier"
        },
        "P4523": {
            "title": "Vermont Sports Hall of Fame athlete ID",
            "type": "External identifier"
        },
        "P4524": {
            "title": "Survey of Scottish Witchcraft - Person ID",
            "type": "External identifier"
        },
        "P4525": {
            "title": "MuIS object ID",
            "type": "External identifier"
        },
        "P4526": {
            "title": "ABA bird ID",
            "type": "External identifier"
        },
        "P4527": {
            "title": "UK Parliament thesaurus ID",
            "type": "External identifier"
        },
        "P4528": {
            "title": "REGINE water system number",
            "type": "External identifier"
        },
        "P4529": {
            "title": "Douban Movie ID",
            "type": "External identifier"
        },
        "P453": {
            "title": "character role",
            "type": "Item"
        },
        "P4530": {
            "title": "Bangladesh administrative division code",
            "type": "External identifier"
        },
        "P4531": {
            "title": "ChinesePosters artist ID",
            "type": "External identifier"
        },
        "P4532": {
            "title": "Survey of Scottish Witchcraft - Trial ID",
            "type": "External identifier"
        },
        "P4533": {
            "title": "Czech street ID",
            "type": "External identifier"
        },
        "P4534": {
            "title": "EUTA person ID",
            "type": "External identifier"
        },
        "P4535": {
            "title": "EUTA theatre ID",
            "type": "External identifier"
        },
        "P4536": {
            "title": "EThOS thesis ID",
            "type": "External identifier"
        },
        "P4537": {
            "title": "Spider Ontology ID",
            "type": "External identifier"
        },
        "P4538": {
            "title": "Snooker Database player ID",
            "type": "External identifier"
        },
        "P4539": {
            "title": "Collective Biographies of Women ID",
            "type": "External identifier"
        },
        "P454": {
            "title": "Structurae ID (structure)",
            "type": "External identifier"
        },
        "P4540": {
            "title": "IBTrACS cyclone ID",
            "type": "External identifier"
        },
        "P4541": {
            "title": "HOO athlete ID",
            "type": "External identifier"
        },
        "P4542": {
            "title": "World of O athlete ID",
            "type": "External identifier"
        },
        "P4543": {
            "title": "has listed ingredient",
            "type": "Item"
        },
        "P4544": {
            "title": "Tennis Temple player ID",
            "type": "External identifier"
        },
        "P4545": {
            "title": "sexually homologous with",
            "type": "Item"
        },
        "P4546": {
            "title": "Gymn Forum athlete ID",
            "type": "External identifier"
        },
        "P4547": {
            "title": "OKS athlete ID",
            "type": "External identifier"
        },
        "P4548": {
            "title": "CGF athlete ID",
            "type": "External identifier"
        },
        "P4549": {
            "title": "ARLIMA ID",
            "type": "External identifier"
        },
        "P455": {
            "title": "Emporis building ID",
            "type": "External identifier"
        },
        "P4550": {
            "title": "CNRS research group ID",
            "type": "External identifier"
        },
        "P4551": {
            "title": "Everyone Remembered ID",
            "type": "External identifier"
        },
        "P4552": {
            "title": "mountain range",
            "type": "Item"
        },
        "P4553": {
            "title": "RA Collections ID",
            "type": "External identifier"
        },
        "P4554": {
            "title": "ICRC PoW ID",
            "type": "External identifier"
        },
        "P4555": {
            "title": "Canada Games ID",
            "type": "External identifier"
        },
        "P4556": {
            "title": "FAI ID",
            "type": "External identifier"
        },
        "P4557": {
            "title": "Indiana Basketball Hall of Fame ID",
            "type": "External identifier"
        },
        "P4558": {
            "title": "SNCZI-IPE dam ID",
            "type": "External identifier"
        },
        "P4559": {
            "title": "IJF ID",
            "type": "External identifier"
        },
        "P4560": {
            "title": "National Collegiate Basketball Hall of Fame ID",
            "type": "External identifier"
        },
        "P4561": {
            "title": "Basketball-Reference.com WNBA ID",
            "type": "External identifier"
        },
        "P4562": {
            "title": "Japanese Baseball Hall of Fame ID",
            "type": "External identifier"
        },
        "P4563": {
            "title": "Art Museum of Estonia artist ID",
            "type": "External identifier"
        },
        "P4564": {
            "title": "Art Museum of Estonia artwork ID",
            "type": "External identifier"
        },
        "P4565": {
            "title": "electoral district number",
            "type": "String"
        },
        "P4566": {
            "title": "awarded for period",
            "type": "Point in time"
        },
        "P4567": {
            "title": "BTO five-letter code",
            "type": "External identifier"
        },
        "P4568": {
            "title": "SNCZI-IPE reservoir ID",
            "type": "External identifier"
        },
        "P4569": {
            "title": "BPH journal ID",
            "type": "External identifier"
        },
        "P457": {
            "title": "foundational text",
            "type": "Item"
        },
        "P4570": {
            "title": "Wikidata project",
            "type": "URL"
        },
        "P4571": {
            "title": "West Australian Football League player ID",
            "type": "External identifier"
        },
        "P4572": {
            "title": "SS KL Auschwitz Garrison ID",
            "type": "External identifier"
        },
        "P4573": {
            "title": "Merchant Category Code",
            "type": "String"
        },
        "P4574": {
            "title": "Norwegian historical register of persons ID",
            "type": "External identifier"
        },
        "P4575": {
            "title": "HTML entity",
            "type": "String"
        },
        "P4576": {
            "title": "Tidal artist ID",
            "type": "External identifier"
        },
        "P4577": {
            "title": "Tidal album ID",
            "type": "External identifier"
        },
        "P4578": {
            "title": "Tidal track ID",
            "type": "External identifier"
        },
        "P4579": {
            "title": "Tidal video ID",
            "type": "External identifier"
        },
        "P458": {
            "title": "IMO ship number",
            "type": "External identifier"
        },
        "P4580": {
            "title": "Berlinische Galerie artist ID",
            "type": "External identifier"
        },
        "P4581": {
            "title": "St\u00e4del Museum artist ID",
            "type": "External identifier"
        },
        "P4582": {
            "title": "Kulturelles Erbe K\u00f6ln object ID",
            "type": "External identifier"
        },
        "P4583": {
            "title": "U.S. Gymnastics Hall of Fame athlete ID",
            "type": "External identifier"
        },
        "P4584": {
            "title": "first appearance",
            "type": "Item"
        },
        "P4585": {
            "title": "Accademia della Crusca ID",
            "type": "External identifier"
        },
        "P4586": {
            "title": "type foundry",
            "type": "Item"
        },
        "P4587": {
            "title": "Argentinian Historic Heritage ID",
            "type": "External identifier"
        },
        "P4588": {
            "title": "IWGA athlete ID",
            "type": "External identifier"
        },
        "P4589": {
            "title": "Dreadnought Project page",
            "type": "External identifier"
        },
        "P459": {
            "title": "determination method",
            "type": "Item"
        },
        "P4590": {
            "title": "Atomic Heritage Foundation ID",
            "type": "External identifier"
        },
        "P4591": {
            "title": "National Inventory of Canadian Military Memorials ID",
            "type": "External identifier"
        },
        "P4592": {
            "title": "Mountain Project ID",
            "type": "External identifier"
        },
        "P4593": {
            "title": "CPE athlete ID",
            "type": "External identifier"
        },
        "P4594": {
            "title": "arXiv author ID",
            "type": "External identifier"
        },
        "P4595": {
            "title": "post town",
            "type": "String"
        },
        "P4596": {
            "title": "NIOSH Publication Number",
            "type": "External identifier"
        },
        "P4597": {
            "title": "FAPESP institution ID",
            "type": "External identifier"
        },
        "P4598": {
            "title": "FAPESP researcher ID",
            "type": "External identifier"
        },
        "P4599": {
            "title": "monomer of",
            "type": "Item"
        },
        "P460": {
            "title": "said to be the same as",
            "type": "Item"
        },
        "P4600": {
            "title": "polymer of",
            "type": "Item"
        },
        "P4601": {
            "title": "Lives of WWI ID",
            "type": "External identifier"
        },
        "P4602": {
            "title": "date of burial or cremation",
            "type": "Point in time"
        },
        "P4603": {
            "title": "Microsoft Store album ID",
            "type": "External identifier"
        },
        "P4604": {
            "title": "World Rugby Hall of Fame ID",
            "type": "External identifier"
        },
        "P4605": {
            "title": "South Dakota Sports Hall of Fame ID",
            "type": "External identifier"
        },
        "P4606": {
            "title": "National Film Board of Canada movie ID",
            "type": "External identifier"
        },
        "P4607": {
            "title": "Swedish Musical Heritage composer ID",
            "type": "External identifier"
        },
        "P4608": {
            "title": "scenographer",
            "type": "Item"
        },
        "P4609": {
            "title": "Queensland Australian Football Hall of Fame inductee ID",
            "type": "External identifier"
        },
        "P461": {
            "title": "opposite of",
            "type": "Item"
        },
        "P4610": {
            "title": "Art Institute of Chicago artwork ID",
            "type": "External identifier"
        },
        "P4611": {
            "title": "LACMA ID",
            "type": "External identifier"
        },
        "P4612": {
            "title": "LKL player ID",
            "type": "External identifier"
        },
        "P4613": {
            "title": "Encyclopedia of Modern Ukraine ID",
            "type": "External identifier"
        },
        "P4614": {
            "title": "watershed",
            "type": "Item"
        },
        "P4615": {
            "title": "WAFL FootyFacts ID",
            "type": "External identifier"
        },
        "P4616": {
            "title": "UniProt journal ID",
            "type": "External identifier"
        },
        "P4617": {
            "title": "DVV player ID",
            "type": "External identifier"
        },
        "P4618": {
            "title": "AUSNUT 2011\u201313 Food Group ID",
            "type": "External identifier"
        },
        "P4619": {
            "title": "National Library of Brazil ID",
            "type": "External identifier"
        },
        "P462": {
            "title": "color",
            "type": "Item"
        },
        "P4620": {
            "title": "Merkelstiftung person ID",
            "type": "External identifier"
        },
        "P4621": {
            "title": "W\u00fcrttembergische Kirchengeschichte person ID",
            "type": "External identifier"
        },
        "P4622": {
            "title": "trophy awarded",
            "type": "Item"
        },
        "P4623": {
            "title": "South Australian Football Hall of Fame inductee ID",
            "type": "External identifier"
        },
        "P4624": {
            "title": "squadron embarked",
            "type": "Item"
        },
        "P4625": {
            "title": "Museum of Fine Arts, Boston object ID",
            "type": "External identifier"
        },
        "P4626": {
            "title": "identity of object in context",
            "type": "Item"
        },
        "P4627": {
            "title": "EK number",
            "type": "External identifier"
        },
        "P4628": {
            "title": "ICTV virus genome composition",
            "type": "Item"
        },
        "P4629": {
            "title": "Online Books Page author ID",
            "type": "External identifier"
        },
        "P463": {
            "title": "member of",
            "type": "Item"
        },
        "P4630": {
            "title": "DORIS ID",
            "type": "External identifier"
        },
        "P4631": {
            "title": "Iowa Sports Hall of Fame ID",
            "type": "External identifier"
        },
        "P4632": {
            "title": "Bechdel Test Movie List ID",
            "type": "External identifier"
        },
        "P4633": {
            "title": "name of the character role",
            "type": "String"
        },
        "P4634": {
            "title": "premiere type",
            "type": "Item"
        },
        "P4635": {
            "title": "Indian Financial System Code",
            "type": "External identifier"
        },
        "P4636": {
            "title": "Sherpa Juliet ID",
            "type": "External identifier"
        },
        "P4637": {
            "title": "FoodEx2 code",
            "type": "External identifier"
        },
        "P4638": {
            "title": "The Peerage person ID",
            "type": "External identifier"
        },
        "P4639": {
            "title": "Estonian Football Association team ID",
            "type": "External identifier"
        },
        "P464": {
            "title": "NOR",
            "type": "External identifier"
        },
        "P4640": {
            "title": "photosphere image",
            "type": "Commons media file"
        },
        "P4641": {
            "title": "Welsh Chapels ID",
            "type": "External identifier"
        },
        "P4642": {
            "title": "Colorado Sports Hall of Fame ID",
            "type": "External identifier"
        },
        "P4643": {
            "title": "Philadelphia Museum of Art ID",
            "type": "External identifier"
        },
        "P4644": {
            "title": "ESCO skill ID",
            "type": "External identifier"
        },
        "P4645": {
            "title": "RCR number",
            "type": "External identifier"
        },
        "P4646": {
            "title": "representation of",
            "type": "Item"
        },
        "P4647": {
            "title": "location of first performance",
            "type": "Item"
        },
        "P4649": {
            "title": "identity of subject in context",
            "type": "Item"
        },
        "P465": {
            "title": "sRGB color hex triplet",
            "type": "String"
        },
        "P4650": {
            "title": "BSD Portal athlete ID",
            "type": "External identifier"
        },
        "P4651": {
            "title": "Welsh assembly ID",
            "type": "External identifier"
        },
        "P4652": {
            "title": "ESCO Occupation ID",
            "type": "External identifier"
        },
        "P4653": {
            "title": "partition table type",
            "type": "Item"
        },
        "P4654": {
            "title": "partition type identifier",
            "type": "String"
        },
        "P4655": {
            "title": "Flathub ID",
            "type": "External identifier"
        },
        "P4656": {
            "title": "Wikimedia import URL",
            "type": "URL"
        },
        "P4657": {
            "title": "The Numbers person ID",
            "type": "External identifier"
        },
        "P4658": {
            "title": "Coflein ID",
            "type": "External identifier"
        },
        "P4659": {
            "title": "Mus\u00e9e d'Orsay artwork ID",
            "type": "External identifier"
        },
        "P466": {
            "title": "occupant",
            "type": "Item"
        },
        "P4660": {
            "title": "CPDOC ID",
            "type": "External identifier"
        },
        "P4661": {
            "title": "reservoir created",
            "type": "Item"
        },
        "P4662": {
            "title": "SAN ID",
            "type": "External identifier"
        },
        "P4663": {
            "title": "DACS ID",
            "type": "External identifier"
        },
        "P4664": {
            "title": "Wiki Aves bird ID",
            "type": "External identifier"
        },
        "P4665": {
            "title": "Cinemagia film ID",
            "type": "External identifier"
        },
        "P4666": {
            "title": "Cinemagia actor ID",
            "type": "External identifier"
        },
        "P4667": {
            "title": "Buenos Aires legislator ID",
            "type": "External identifier"
        },
        "P4668": {
            "title": "USA Gymnastics Hall of Fame athlete ID",
            "type": "External identifier"
        },
        "P4669": {
            "title": "tabular software version",
            "type": "Tabular data"
        },
        "P467": {
            "title": "legislated by",
            "type": "Item"
        },
        "P4670": {
            "title": "Sjukv\u00e5rdsr\u00e5dgivningen Category ID",
            "type": "External identifier"
        },
        "P4671": {
            "title": "Hall of Light Amiga database ID",
            "type": "External identifier"
        },
        "P4672": {
            "title": "EMLO location ID",
            "type": "External identifier"
        },
        "P4673": {
            "title": "Museum of Fine Arts, Houston object ID",
            "type": "External identifier"
        },
        "P4674": {
            "title": "Indianapolis Museum of Art artwork ID",
            "type": "External identifier"
        },
        "P4675": {
            "title": "appears in the form of",
            "type": "Item"
        },
        "P4676": {
            "title": "MAVISE TV channel ID",
            "type": "External identifier"
        },
        "P4677": {
            "title": "MAVISE on-demand audiovisual service ID",
            "type": "External identifier"
        },
        "P4678": {
            "title": "MAVISE competent authority ID",
            "type": "External identifier"
        },
        "P4679": {
            "title": "MAVISE company ID",
            "type": "External identifier"
        },
        "P468": {
            "title": "dan/kyu rank",
            "type": "Item"
        },
        "P4680": {
            "title": "constraint scope",
            "type": "Item"
        },
        "P4681": {
            "title": "Eldoblaje dubbing actor ID",
            "type": "External identifier"
        },
        "P4682": {
            "title": "Eldoblaje original actor ID",
            "type": "External identifier"
        },
        "P4683": {
            "title": "National Gallery of Art artwork ID",
            "type": "External identifier"
        },
        "P4684": {
            "title": "National Gallery of Victoria artwork ID",
            "type": "External identifier"
        },
        "P4685": {
            "title": "Nintendo Game Store ID",
            "type": "External identifier"
        },
        "P4686": {
            "title": "Carnegie Museum of Art ID",
            "type": "External identifier"
        },
        "P4687": {
            "title": "Dictionnaire des peintres belges ID",
            "type": "External identifier"
        },
        "P4688": {
            "title": "geomorphological unit",
            "type": "Item"
        },
        "P4689": {
            "title": "Environmental Register code (Estonia)",
            "type": "External identifier"
        },
        "P469": {
            "title": "lakes on river",
            "type": "Item"
        },
        "P4690": {
            "title": "Oireachtas member ID",
            "type": "External identifier"
        },
        "P4691": {
            "title": "OpenSecrets organization ID",
            "type": "External identifier"
        },
        "P4692": {
            "title": "American Art Collaborative object ID",
            "type": "External identifier"
        },
        "P4693": {
            "title": "Argentine deputy votations ID",
            "type": "External identifier"
        },
        "P4694": {
            "title": "Arquivo Arq ID",
            "type": "External identifier"
        },
        "P4695": {
            "title": "GEMS Code",
            "type": "External identifier"
        },
        "P4696": {
            "title": "CIQUAL2017 ID",
            "type": "External identifier"
        },
        "P4697": {
            "title": "Historic Place Names of Wales ID",
            "type": "External identifier"
        },
        "P4698": {
            "title": "Conseil de Presse Luxembourg journalist ID",
            "type": "External identifier"
        },
        "P4699": {
            "title": "Canal-U channel ID",
            "type": "External identifier"
        },
        "P47": {
            "title": "shares border with",
            "type": "Item"
        },
        "P470": {
            "title": "Eight Banner register",
            "type": "Item"
        },
        "P473": {
            "title": "local dialing code",
            "type": "String"
        },
        "P474": {
            "title": "country calling code",
            "type": "String"
        },
        "P476": {
            "title": "CELEX number",
            "type": "External identifier"
        },
        "P477": {
            "title": "Canadian Register of Historic Places ID",
            "type": "External identifier"
        },
        "P478": {
            "title": "volume",
            "type": "String"
        },
        "P479": {
            "title": "input method",
            "type": "Item"
        },
        "P480": {
            "title": "FilmAffinity ID",
            "type": "External identifier"
        },
        "P481": {
            "title": "Palissy ID",
            "type": "External identifier"
        },
        "P483": {
            "title": "recorded at",
            "type": "Item"
        },
        "P484": {
            "title": "IMA Number, broad sense",
            "type": "External identifier"
        },
        "P485": {
            "title": "archives at",
            "type": "Item"
        },
        "P486": {
            "title": "MeSH ID",
            "type": "External identifier"
        },
        "P487": {
            "title": "Unicode character",
            "type": "String"
        },
        "P488": {
            "title": "chairperson",
            "type": "Item"
        },
        "P489": {
            "title": "currency symbol description",
            "type": "Item"
        },
        "P490": {
            "title": "provisional designation",
            "type": "String"
        },
        "P491": {
            "title": "orbit diagram",
            "type": "Commons media file"
        },
        "P492": {
            "title": "OMIM ID",
            "type": "External identifier"
        },
        "P493": {
            "title": "ICD-9",
            "type": "External identifier"
        },
        "P494": {
            "title": "ICD-10",
            "type": "External identifier"
        },
        "P495": {
            "title": "country of origin",
            "type": "Item"
        },
        "P496": {
            "title": "ORCID iD",
            "type": "External identifier"
        },
        "P497": {
            "title": "CBDB ID",
            "type": "External identifier"
        },
        "P498": {
            "title": "ISO 4217 code",
            "type": "External identifier"
        },
        "P50": {
            "title": "author",
            "type": "Item"
        },
        "P500": {
            "title": "exclave of",
            "type": "Item"
        },
        "P501": {
            "title": "enclave within",
            "type": "Item"
        },
        "P502": {
            "title": "HURDAT identifier",
            "type": "String"
        },
        "P503": {
            "title": "ISO standard",
            "type": "External identifier"
        },
        "P504": {
            "title": "home port",
            "type": "Item"
        },
        "P505": {
            "title": "general manager",
            "type": "Item"
        },
        "P506": {
            "title": "ISO 15924 alpha-4 code",
            "type": "External identifier"
        },
        "P507": {
            "title": "Swedish county code",
            "type": "External identifier"
        },
        "P508": {
            "title": "BNCF Thesaurus ID",
            "type": "External identifier"
        },
        "P509": {
            "title": "cause of death",
            "type": "Item"
        },
        "P51": {
            "title": "audio",
            "type": "Commons media file"
        },
        "P511": {
            "title": "honorific prefix",
            "type": "Item"
        },
        "P512": {
            "title": "academic degree",
            "type": "Item"
        },
        "P514": {
            "title": "interleaves with",
            "type": "Item"
        },
        "P515": {
            "title": "phase of matter",
            "type": "Item"
        },
        "P516": {
            "title": "powerplant",
            "type": "Item"
        },
        "P517": {
            "title": "interaction",
            "type": "Item"
        },
        "P518": {
            "title": "applies to part",
            "type": "Item"
        },
        "P520": {
            "title": "armament",
            "type": "Item"
        },
        "P521": {
            "title": "scheduled service destination",
            "type": "Item"
        },
        "P522": {
            "title": "type of orbit",
            "type": "Item"
        },
        "P523": {
            "title": "temporal range start",
            "type": "Item"
        },
        "P524": {
            "title": "temporal range end",
            "type": "Item"
        },
        "P525": {
            "title": "Swedish municipality code",
            "type": "External identifier"
        },
        "P527": {
            "title": "has part",
            "type": "Item"
        },
        "P528": {
            "title": "catalog code",
            "type": "String"
        },
        "P529": {
            "title": "runway",
            "type": "String"
        },
        "P53": {
            "title": "family",
            "type": "Item"
        },
        "P530": {
            "title": "diplomatic relation",
            "type": "Item"
        },
        "P531": {
            "title": "diplomatic mission sent",
            "type": "Item"
        },
        "P532": {
            "title": "port of registry",
            "type": "Item"
        },
        "P533": {
            "title": "target",
            "type": "Item"
        },
        "P534": {
            "title": "streak color",
            "type": "Item"
        },
        "P535": {
            "title": "Find a Grave memorial ID",
            "type": "External identifier"
        },
        "P536": {
            "title": "ATP player ID",
            "type": "External identifier"
        },
        "P537": {
            "title": "twinning",
            "type": "Item"
        },
        "P538": {
            "title": "fracturing",
            "type": "Item"
        },
        "P539": {
            "title": "Museofile",
            "type": "External identifier"
        },
        "P54": {
            "title": "member of sports team",
            "type": "Item"
        },
        "P541": {
            "title": "office contested",
            "type": "Item"
        },
        "P542": {
            "title": "officially opened by",
            "type": "Item"
        },
        "P543": {
            "title": "oath made by",
            "type": "Item"
        },
        "P545": {
            "title": "torch lit by",
            "type": "Item"
        },
        "P547": {
            "title": "commemorates",
            "type": "Item"
        },
        "P549": {
            "title": "Mathematics Genealogy Project ID",
            "type": "External identifier"
        },
        "P550": {
            "title": "chivalric order",
            "type": "Item"
        },
        "P551": {
            "title": "residence",
            "type": "Item"
        },
        "P552": {
            "title": "handedness",
            "type": "Item"
        },
        "P553": {
            "title": "website account on",
            "type": "Item"
        },
        "P554": {
            "title": "website username",
            "type": "String"
        },
        "P555": {
            "title": "doubles record",
            "type": "String"
        },
        "P556": {
            "title": "crystal system",
            "type": "Item"
        },
        "P557": {
            "title": "DiseasesDB",
            "type": "External identifier"
        },
        "P558": {
            "title": "unit symbol (string)",
            "type": "String"
        },
        "P559": {
            "title": "terminus",
            "type": "Item"
        },
        "P560": {
            "title": "direction",
            "type": "Item"
        },
        "P561": {
            "title": "NATO reporting name",
            "type": "String"
        },
        "P562": {
            "title": "central bank/issuer",
            "type": "Item"
        },
        "P563": {
            "title": "ICD-O",
            "type": "External identifier"
        },
        "P564": {
            "title": "singles record",
            "type": "String"
        },
        "P565": {
            "title": "crystal habit",
            "type": "Item"
        },
        "P566": {
            "title": "basionym",
            "type": "Item"
        },
        "P567": {
            "title": "underlies",
            "type": "Item"
        },
        "P568": {
            "title": "overlies",
            "type": "Item"
        },
        "P569": {
            "title": "date of birth",
            "type": "Point in time"
        },
        "P57": {
            "title": "director",
            "type": "Item"
        },
        "P570": {
            "title": "date of death",
            "type": "Point in time"
        },
        "P571": {
            "title": "inception",
            "type": "Point in time"
        },
        "P574": {
            "title": "date of taxon name publication",
            "type": "Point in time"
        },
        "P575": {
            "title": "time of discovery or invention",
            "type": "Point in time"
        },
        "P576": {
            "title": "dissolved, abolished or demolished",
            "type": "Point in time"
        },
        "P577": {
            "title": "publication date",
            "type": "Point in time"
        },
        "P578": {
            "title": "Sandbox-TimeValue",
            "type": "Point in time"
        },
        "P58": {
            "title": "screenwriter",
            "type": "Item"
        },
        "P580": {
            "title": "start time",
            "type": "Point in time"
        },
        "P582": {
            "title": "end time",
            "type": "Point in time"
        },
        "P585": {
            "title": "point in time",
            "type": "Point in time"
        },
        "P586": {
            "title": "IPNI author ID",
            "type": "External identifier"
        },
        "P587": {
            "title": "MMSI",
            "type": "External identifier"
        },
        "P588": {
            "title": "coolant",
            "type": "Item"
        },
        "P589": {
            "title": "point group",
            "type": "Item"
        },
        "P59": {
            "title": "constellation",
            "type": "Item"
        },
        "P590": {
            "title": "GNIS ID",
            "type": "External identifier"
        },
        "P591": {
            "title": "EC number",
            "type": "String"
        },
        "P592": {
            "title": "ChEMBL ID",
            "type": "External identifier"
        },
        "P593": {
            "title": "HomoloGene ID",
            "type": "String"
        },
        "P594": {
            "title": "Ensembl Gene ID",
            "type": "External identifier"
        },
        "P595": {
            "title": "Guide to Pharmacology Ligand ID",
            "type": "External identifier"
        },
        "P597": {
            "title": "WTA player ID",
            "type": "External identifier"
        },
        "P598": {
            "title": "commander of",
            "type": "Item"
        },
        "P599": {
            "title": "ITF ID",
            "type": "External identifier"
        },
        "P6": {
            "title": "head of government",
            "type": "Item"
        },
        "P600": {
            "title": "Wine AppDB-ID",
            "type": "External identifier"
        },
        "P604": {
            "title": "MedlinePlus ID",
            "type": "External identifier"
        },
        "P605": {
            "title": "NUTS code",
            "type": "External identifier"
        },
        "P606": {
            "title": "first flight",
            "type": "Point in time"
        },
        "P607": {
            "title": "conflict",
            "type": "Item"
        },
        "P608": {
            "title": "exhibition history",
            "type": "Item"
        },
        "P609": {
            "title": "terminus location",
            "type": "Item"
        },
        "P61": {
            "title": "discoverer or inventor",
            "type": "Item"
        },
        "P610": {
            "title": "highest point",
            "type": "Item"
        },
        "P611": {
            "title": "religious order",
            "type": "Item"
        },
        "P612": {
            "title": "mother house",
            "type": "Item"
        },
        "P613": {
            "title": "OS grid reference",
            "type": "String"
        },
        "P617": {
            "title": "yard number",
            "type": "String"
        },
        "P618": {
            "title": "source of energy",
            "type": "Item"
        },
        "P619": {
            "title": "time of spacecraft launch",
            "type": "Point in time"
        },
        "P620": {
            "title": "time of spacecraft landing",
            "type": "Point in time"
        },
        "P621": {
            "title": "time of spacecraft orbit decay",
            "type": "Point in time"
        },
        "P622": {
            "title": "spacecraft docking/undocking date",
            "type": "Point in time"
        },
        "P624": {
            "title": "guidance system",
            "type": "Item"
        },
        "P625": {
            "title": "coordinate location",
            "type": "Geographic coordinates"
        },
        "P626": {
            "title": "Sandbox-GeoCoordinateValue",
            "type": "Geographic coordinates"
        },
        "P627": {
            "title": "IUCN taxon ID",
            "type": "String"
        },
        "P628": {
            "title": "E number",
            "type": "External identifier"
        },
        "P629": {
            "title": "edition or translation of",
            "type": "Item"
        },
        "P630": {
            "title": "Paris city digital code",
            "type": "External identifier"
        },
        "P631": {
            "title": "structural engineer",
            "type": "Item"
        },
        "P632": {
            "title": "cultural properties of Belarus reference number",
            "type": "External identifier"
        },
        "P633": {
            "title": "Quebec cultural heritage directory ID",
            "type": "External identifier"
        },
        "P634": {
            "title": "captain",
            "type": "Item"
        },
        "P635": {
            "title": "ISTAT ID",
            "type": "External identifier"
        },
        "P636": {
            "title": "route of administration",
            "type": "Item"
        },
        "P637": {
            "title": "RefSeq Protein ID",
            "type": "External identifier"
        },
        "P638": {
            "title": "PDB structure ID",
            "type": "External identifier"
        },
        "P639": {
            "title": "RefSeq RNA ID",
            "type": "External identifier"
        },
        "P640": {
            "title": "L\u00e9onore ID",
            "type": "External identifier"
        },
        "P641": {
            "title": "sport",
            "type": "Item"
        },
        "P642": {
            "title": "of",
            "type": "Item"
        },
        "P644": {
            "title": "genomic start",
            "type": "String"
        },
        "P645": {
            "title": "genomic end",
            "type": "String"
        },
        "P646": {
            "title": "Freebase ID",
            "type": "External identifier"
        },
        "P647": {
            "title": "drafted by",
            "type": "Item"
        },
        "P648": {
            "title": "Open Library ID",
            "type": "External identifier"
        },
        "P649": {
            "title": "NRHP reference number",
            "type": "External identifier"
        },
        "P65": {
            "title": "site of astronomical discovery",
            "type": "Item"
        },
        "P650": {
            "title": "RKDartists ID",
            "type": "External identifier"
        },
        "P651": {
            "title": "Biografisch Portaal number",
            "type": "External identifier"
        },
        "P652": {
            "title": "UNII",
            "type": "External identifier"
        },
        "P653": {
            "title": "PubMed Health",
            "type": "External identifier"
        },
        "P654": {
            "title": "direction relative to location",
            "type": "Item"
        },
        "P655": {
            "title": "translator",
            "type": "Item"
        },
        "P656": {
            "title": "RefSeq",
            "type": "String"
        },
        "P657": {
            "title": "RTECS number",
            "type": "External identifier"
        },
        "P658": {
            "title": "tracklist",
            "type": "Item"
        },
        "P659": {
            "title": "genomic assembly",
            "type": "Item"
        },
        "P66": {
            "title": "ancestral home",
            "type": "Item"
        },
        "P660": {
            "title": "EC classification",
            "type": "Item"
        },
        "P661": {
            "title": "ChemSpider ID",
            "type": "External identifier"
        },
        "P662": {
            "title": "PubChem CID",
            "type": "External identifier"
        },
        "P663": {
            "title": "DSM-IV",
            "type": "External identifier"
        },
        "P664": {
            "title": "organizer",
            "type": "Item"
        },
        "P665": {
            "title": "KEGG ID",
            "type": "External identifier"
        },
        "P667": {
            "title": "ICPC 2 ID",
            "type": "String"
        },
        "P668": {
            "title": "GeneReviews ID",
            "type": "External identifier"
        },
        "P669": {
            "title": "located on street",
            "type": "Item"
        },
        "P670": {
            "title": "street number",
            "type": "String"
        },
        "P671": {
            "title": "Mouse Genome Informatics ID",
            "type": "External identifier"
        },
        "P672": {
            "title": "MeSH Code",
            "type": "External identifier"
        },
        "P673": {
            "title": "eMedicine",
            "type": "External identifier"
        },
        "P674": {
            "title": "characters",
            "type": "Item"
        },
        "P675": {
            "title": "Google Books ID",
            "type": "External identifier"
        },
        "P676": {
            "title": "lyrics by",
            "type": "Item"
        },
        "P677": {
            "title": "\u00daSOP code",
            "type": "External identifier"
        },
        "P678": {
            "title": "incertae sedis",
            "type": "Item"
        },
        "P679": {
            "title": "ZVG number",
            "type": "External identifier"
        },
        "P680": {
            "title": "molecular function",
            "type": "Item"
        },
        "P681": {
            "title": "cell component",
            "type": "Item"
        },
        "P682": {
            "title": "biological process",
            "type": "Item"
        },
        "P683": {
            "title": "ChEBI ID",
            "type": "External identifier"
        },
        "P684": {
            "title": "ortholog",
            "type": "Item"
        },
        "P685": {
            "title": "NCBI Taxonomy ID",
            "type": "External identifier"
        },
        "P686": {
            "title": "Gene Ontology ID",
            "type": "External identifier"
        },
        "P687": {
            "title": "BHL Page ID",
            "type": "External identifier"
        },
        "P688": {
            "title": "encodes",
            "type": "Item"
        },
        "P689": {
            "title": "afflicts",
            "type": "Item"
        },
        "P69": {
            "title": "educated at",
            "type": "Item"
        },
        "P690": {
            "title": "space group",
            "type": "Item"
        },
        "P691": {
            "title": "NKCR AUT ID",
            "type": "External identifier"
        },
        "P692": {
            "title": "Gene Atlas Image",
            "type": "Commons media file"
        },
        "P693": {
            "title": "cleavage",
            "type": "Item"
        },
        "P694": {
            "title": "replaced synonym (for nom. nov.)",
            "type": "Item"
        },
        "P695": {
            "title": "UN number",
            "type": "External identifier"
        },
        "P696": {
            "title": "Neurolex ID",
            "type": "External identifier"
        },
        "P697": {
            "title": "ex taxon author",
            "type": "Item"
        },
        "P698": {
            "title": "PubMed ID",
            "type": "External identifier"
        },
        "P699": {
            "title": "Disease Ontology ID",
            "type": "External identifier"
        },
        "P700": {
            "title": "Kemler code",
            "type": "External identifier"
        },
        "P701": {
            "title": "Dodis ID",
            "type": "External identifier"
        },
        "P702": {
            "title": "encoded by",
            "type": "Item"
        },
        "P703": {
            "title": "found in taxon",
            "type": "Item"
        },
        "P704": {
            "title": "Ensembl Transcript ID",
            "type": "External identifier"
        },
        "P705": {
            "title": "Ensembl Protein ID",
            "type": "External identifier"
        },
        "P706": {
            "title": "located on terrain feature",
            "type": "Item"
        },
        "P707": {
            "title": "satellite bus",
            "type": "Item"
        },
        "P708": {
            "title": "diocese",
            "type": "Item"
        },
        "P709": {
            "title": "Historic Scotland ID",
            "type": "External identifier"
        },
        "P710": {
            "title": "participant",
            "type": "Item"
        },
        "P711": {
            "title": "Strunz 8th edition (series ID, updated)",
            "type": "String"
        },
        "P712": {
            "title": "Nickel-Strunz 9th edition (updated 2009)",
            "type": "String"
        },
        "P713": {
            "title": "Nickel-Strunz '10th ed', review of (9th ed/ 2009 update)",
            "type": "String"
        },
        "P714": {
            "title": "Dana 8th edition",
            "type": "External identifier"
        },
        "P715": {
            "title": "Drugbank ID",
            "type": "External identifier"
        },
        "P716": {
            "title": "JPL Small-Body Database ID",
            "type": "External identifier"
        },
        "P717": {
            "title": "Minor Planet Center observatory code",
            "type": "External identifier"
        },
        "P718": {
            "title": "Canmore ID",
            "type": "External identifier"
        },
        "P720": {
            "title": "asteroid spectral type",
            "type": "Item"
        },
        "P721": {
            "title": "OKATO ID",
            "type": "External identifier"
        },
        "P722": {
            "title": "UIC station code",
            "type": "External identifier"
        },
        "P723": {
            "title": "DBNL author ID",
            "type": "External identifier"
        },
        "P724": {
            "title": "Internet Archive ID",
            "type": "External identifier"
        },
        "P725": {
            "title": "voice actor",
            "type": "Item"
        },
        "P726": {
            "title": "candidate",
            "type": "Item"
        },
        "P727": {
            "title": "Europeana ID",
            "type": "External identifier"
        },
        "P728": {
            "title": "GHS hazard statement (obsolete)",
            "type": "String"
        },
        "P729": {
            "title": "service entry",
            "type": "Point in time"
        },
        "P730": {
            "title": "service retirement",
            "type": "Point in time"
        },
        "P731": {
            "title": "Litholex ID",
            "type": "External identifier"
        },
        "P732": {
            "title": "BGS Lexicon ID",
            "type": "External identifier"
        },
        "P733": {
            "title": "DINOloket",
            "type": "External identifier"
        },
        "P734": {
            "title": "family name",
            "type": "Item"
        },
        "P735": {
            "title": "given name",
            "type": "Item"
        },
        "P736": {
            "title": "cover artist",
            "type": "Item"
        },
        "P737": {
            "title": "influenced by",
            "type": "Item"
        },
        "P739": {
            "title": "ammunition",
            "type": "Item"
        },
        "P740": {
            "title": "location of formation",
            "type": "Item"
        },
        "P741": {
            "title": "playing hand",
            "type": "Item"
        },
        "P742": {
            "title": "pseudonym",
            "type": "String"
        },
        "P744": {
            "title": "asteroid family",
            "type": "Item"
        },
        "P745": {
            "title": "Low German Bibliography and Biography ID",
            "type": "External identifier"
        },
        "P746": {
            "title": "date of disappearance",
            "type": "Point in time"
        },
        "P747": {
            "title": "edition",
            "type": "Item"
        },
        "P748": {
            "title": "appointed by",
            "type": "Item"
        },
        "P749": {
            "title": "parent organization",
            "type": "Item"
        },
        "P750": {
            "title": "distributor",
            "type": "Item"
        },
        "P751": {
            "title": "introduced feature",
            "type": "Item"
        },
        "P756": {
            "title": "removed feature",
            "type": "Item"
        },
        "P757": {
            "title": "World Heritage Site ID",
            "type": "External identifier"
        },
        "P758": {
            "title": "Kulturminne ID",
            "type": "External identifier"
        },
        "P759": {
            "title": "Alberta Register of Historic Places ID",
            "type": "External identifier"
        },
        "P760": {
            "title": "DPLA ID",
            "type": "External identifier"
        },
        "P761": {
            "title": "Lake ID (Sweden)",
            "type": "External identifier"
        },
        "P762": {
            "title": "Czech cultural heritage ID",
            "type": "External identifier"
        },
        "P763": {
            "title": "PEI Register of Historic Places ID",
            "type": "External identifier"
        },
        "P764": {
            "title": "OKTMO ID",
            "type": "External identifier"
        },
        "P765": {
            "title": "surface played on",
            "type": "Item"
        },
        "P767": {
            "title": "contributor(s) to the creative work",
            "type": "Item"
        },
        "P768": {
            "title": "electoral district",
            "type": "Item"
        },
        "P769": {
            "title": "significant drug interaction",
            "type": "Item"
        },
        "P770": {
            "title": "cause of destruction",
            "type": "Item"
        },
        "P771": {
            "title": "Swiss municipality code",
            "type": "External identifier"
        },
        "P772": {
            "title": "INE municipality code",
            "type": "External identifier"
        },
        "P773": {
            "title": "ISO 3166-3",
            "type": "External identifier"
        },
        "P774": {
            "title": "FIPS 55-3 (locations in the US)",
            "type": "External identifier"
        },
        "P775": {
            "title": "Swedish urban area code",
            "type": "External identifier"
        },
        "P776": {
            "title": "Swedish minor urban area code",
            "type": "External identifier"
        },
        "P777": {
            "title": "Swedish civil parish code/ATA code",
            "type": "External identifier"
        },
        "P778": {
            "title": "Church of Sweden parish code",
            "type": "External identifier"
        },
        "P779": {
            "title": "Church of Sweden Pastoratskod",
            "type": "External identifier"
        },
        "P78": {
            "title": "top-level Internet domain",
            "type": "Item"
        },
        "P780": {
            "title": "symptoms",
            "type": "Item"
        },
        "P781": {
            "title": "SIKART ID",
            "type": "External identifier"
        },
        "P782": {
            "title": "LAU",
            "type": "External identifier"
        },
        "P783": {
            "title": "hymenium type",
            "type": "Item"
        },
        "P784": {
            "title": "mushroom cap shape",
            "type": "Item"
        },
        "P785": {
            "title": "hymenium attachment",
            "type": "Item"
        },
        "P786": {
            "title": "stipe character",
            "type": "Item"
        },
        "P787": {
            "title": "spore print color",
            "type": "Item"
        },
        "P788": {
            "title": "mushroom ecological type",
            "type": "Item"
        },
        "P789": {
            "title": "edibility",
            "type": "Item"
        },
        "P790": {
            "title": "approved by",
            "type": "Item"
        },
        "P791": {
            "title": "International Standard Identifier for Libraries",
            "type": "String"
        },
        "P792": {
            "title": "chapter",
            "type": "String"
        },
        "P793": {
            "title": "significant event",
            "type": "Item"
        },
        "P795": {
            "title": "located on linear feature",
            "type": "Item"
        },
        "P797": {
            "title": "authority",
            "type": "Item"
        },
        "P798": {
            "title": "military designation",
            "type": "String"
        },
        "P799": {
            "title": "Air Ministry specification ID",
            "type": "String"
        },
        "P800": {
            "title": "notable work",
            "type": "Item"
        },
        "P802": {
            "title": "student",
            "type": "Item"
        },
        "P803": {
            "title": "professorship",
            "type": "Item"
        },
        "P804": {
            "title": "GNIS Antarctica ID",
            "type": "External identifier"
        },
        "P805": {
            "title": "statement is subject of",
            "type": "Item"
        },
        "P806": {
            "title": "Italian cadastre code",
            "type": "External identifier"
        },
        "P807": {
            "title": "separated from",
            "type": "Item"
        },
        "P808": {
            "title": "Bien de Inter\u00e9s Cultural (BIC) code",
            "type": "External identifier"
        },
        "P809": {
            "title": "WDPA ID",
            "type": "External identifier"
        },
        "P81": {
            "title": "connecting line",
            "type": "Item"
        },
        "P811": {
            "title": "academic minor",
            "type": "Item"
        },
        "P812": {
            "title": "academic major",
            "type": "Item"
        },
        "P813": {
            "title": "retrieved",
            "type": "Point in time"
        },
        "P814": {
            "title": "IUCN protected areas category",
            "type": "Item"
        },
        "P815": {
            "title": "ITIS TSN",
            "type": "External identifier"
        },
        "P816": {
            "title": "decays to",
            "type": "Item"
        },
        "P817": {
            "title": "decay mode",
            "type": "Item"
        },
        "P818": {
            "title": "arXiv ID",
            "type": "External identifier"
        },
        "P819": {
            "title": "ADS bibcode",
            "type": "External identifier"
        },
        "P820": {
            "title": "arXiv classification",
            "type": "String"
        },
        "P821": {
            "title": "CGNDB Unique ID",
            "type": "External identifier"
        },
        "P822": {
            "title": "mascot",
            "type": "Item"
        },
        "P823": {
            "title": "speaker",
            "type": "Item"
        },
        "P824": {
            "title": "Meteoritical Bulletin Database ID",
            "type": "External identifier"
        },
        "P825": {
            "title": "dedicated to",
            "type": "Item"
        },
        "P826": {
            "title": "tonality",
            "type": "Item"
        },
        "P827": {
            "title": "BBC programme ID",
            "type": "External identifier"
        },
        "P828": {
            "title": "has cause",
            "type": "Item"
        },
        "P829": {
            "title": "OEIS ID",
            "type": "External identifier"
        },
        "P830": {
            "title": "Encyclopedia of Life ID",
            "type": "External identifier"
        },
        "P831": {
            "title": "parent club",
            "type": "Item"
        },
        "P832": {
            "title": "public holiday",
            "type": "Item"
        },
        "P833": {
            "title": "interchange station",
            "type": "Item"
        },
        "P834": {
            "title": "train depot",
            "type": "Item"
        },
        "P835": {
            "title": "author citation (zoology)",
            "type": "String"
        },
        "P836": {
            "title": "GSS code (2011)",
            "type": "External identifier"
        },
        "P837": {
            "title": "day in year for periodic occurrence",
            "type": "Item"
        },
        "P838": {
            "title": "BioLib ID",
            "type": "External identifier"
        },
        "P839": {
            "title": "IMSLP ID",
            "type": "External identifier"
        },
        "P84": {
            "title": "architect",
            "type": "Item"
        },
        "P840": {
            "title": "narrative location",
            "type": "Item"
        },
        "P841": {
            "title": "feast day",
            "type": "Item"
        },
        "P842": {
            "title": "Fossilworks ID",
            "type": "External identifier"
        },
        "P843": {
            "title": "SIRUTA code",
            "type": "External identifier"
        },
        "P844": {
            "title": "UBIGEO code",
            "type": "External identifier"
        },
        "P845": {
            "title": "Saskatchewan Register of Heritage Property ID",
            "type": "External identifier"
        },
        "P846": {
            "title": "Global Biodiversity Information Facility ID",
            "type": "External identifier"
        },
        "P847": {
            "title": "United States Navy aircraft designation",
            "type": "String"
        },
        "P849": {
            "title": "Japanese military aircraft designation",
            "type": "External identifier"
        },
        "P85": {
            "title": "anthem",
            "type": "Item"
        },
        "P850": {
            "title": "WoRMS-ID",
            "type": "External identifier"
        },
        "P852": {
            "title": "ESRB rating",
            "type": "Item"
        },
        "P853": {
            "title": "CERO rating",
            "type": "Item"
        },
        "P854": {
            "title": "reference URL",
            "type": "URL"
        },
        "P855": {
            "title": "Sandbox-URL",
            "type": "URL"
        },
        "P856": {
            "title": "official website",
            "type": "URL"
        },
        "P858": {
            "title": "ESPNscrum player ID",
            "type": "External identifier"
        },
        "P859": {
            "title": "sponsor",
            "type": "Item"
        },
        "P86": {
            "title": "composer",
            "type": "Item"
        },
        "P860": {
            "title": "e-archiv.li ID",
            "type": "External identifier"
        },
        "P861": {
            "title": "PremiershipRugby.com ID",
            "type": "External identifier"
        },
        "P862": {
            "title": "Operational Requirement of the UK Air Ministry",
            "type": "External identifier"
        },
        "P863": {
            "title": "InPhO ID",
            "type": "External identifier"
        },
        "P864": {
            "title": "ACM Digital Library author ID",
            "type": "External identifier"
        },
        "P865": {
            "title": "BMLO",
            "type": "External identifier"
        },
        "P866": {
            "title": "Perlentaucher ID",
            "type": "External identifier"
        },
        "P867": {
            "title": "ROME Occupation Code (v3)",
            "type": "External identifier"
        },
        "P868": {
            "title": "foods traditionally associated",
            "type": "Item"
        },
        "P87": {
            "title": "librettist",
            "type": "Item"
        },
        "P870": {
            "title": "instrumentation",
            "type": "Item"
        },
        "P872": {
            "title": "printed by",
            "type": "Item"
        },
        "P873": {
            "title": "phase point",
            "type": "Item"
        },
        "P874": {
            "title": "UN class",
            "type": "String"
        },
        "P875": {
            "title": "UN code classification",
            "type": "String"
        },
        "P876": {
            "title": "UN packaging group",
            "type": "String"
        },
        "P877": {
            "title": "NFPA Other",
            "type": "String"
        },
        "P878": {
            "title": "avionics",
            "type": "Item"
        },
        "P879": {
            "title": "pennant number",
            "type": "String"
        },
        "P88": {
            "title": "commissioned by",
            "type": "Item"
        },
        "P880": {
            "title": "CPU",
            "type": "Item"
        },
        "P881": {
            "title": "type of variable star",
            "type": "Item"
        },
        "P882": {
            "title": "FIPS 6-4 (US counties)",
            "type": "External identifier"
        },
        "P883": {
            "title": "FIPS 5-2 (code for US states)",
            "type": "External identifier"
        },
        "P884": {
            "title": "State Water Register Code (Russia)",
            "type": "External identifier"
        },
        "P885": {
            "title": "origin of the watercourse",
            "type": "Item"
        },
        "P886": {
            "title": "LIR",
            "type": "External identifier"
        },
        "P887": {
            "title": "based on heuristic",
            "type": "Item"
        },
        "P888": {
            "title": "JSTOR article ID",
            "type": "External identifier"
        },
        "P889": {
            "title": "Mathematical Reviews ID",
            "type": "External identifier"
        },
        "P892": {
            "title": "RfC ID",
            "type": "External identifier"
        },
        "P893": {
            "title": "Social Science Research Network ID",
            "type": "External identifier"
        },
        "P894": {
            "title": "zbMATH work ID",
            "type": "External identifier"
        },
        "P897": {
            "title": "United States Army and Air Force aircraft designation",
            "type": "String"
        },
        "P898": {
            "title": "IPA transcription",
            "type": "String"
        },
        "P901": {
            "title": "FIPS 10-4 (countries and regions)",
            "type": "External identifier"
        },
        "P902": {
            "title": "HDS ID",
            "type": "External identifier"
        },
        "P905": {
            "title": "PORT film ID",
            "type": "External identifier"
        },
        "P906": {
            "title": "SELIBR Id",
            "type": "External identifier"
        },
        "P908": {
            "title": "PEGI rating",
            "type": "Item"
        },
        "P909": {
            "title": "Nova Scotia Register of Historic Places ID",
            "type": "External identifier"
        },
        "P91": {
            "title": "sexual orientation",
            "type": "Item"
        },
        "P910": {
            "title": "topic's main category",
            "type": "Item"
        },
        "P911": {
            "title": "South African municipality code",
            "type": "External identifier"
        },
        "P912": {
            "title": "has facility",
            "type": "Item"
        },
        "P913": {
            "title": "notation",
            "type": "Item"
        },
        "P914": {
            "title": "USK rating",
            "type": "Item"
        },
        "P915": {
            "title": "filming location",
            "type": "Item"
        },
        "P916": {
            "title": "GSRR rating",
            "type": "Item"
        },
        "P917": {
            "title": "GRAU index",
            "type": "External identifier"
        },
        "P918": {
            "title": "NOC Occupation Code",
            "type": "External identifier"
        },
        "P919": {
            "title": "SOC Code (2010)",
            "type": "External identifier"
        },
        "P920": {
            "title": "LEM ID",
            "type": "String"
        },
        "P921": {
            "title": "main subject",
            "type": "Item"
        },
        "P922": {
            "title": "magnetic ordering",
            "type": "Item"
        },
        "P923": {
            "title": "medical examinations",
            "type": "Item"
        },
        "P924": {
            "title": "medical treatment",
            "type": "Item"
        },
        "P925": {
            "title": "presynaptic connection",
            "type": "Item"
        },
        "P926": {
            "title": "postsynaptic connection",
            "type": "Item"
        },
        "P927": {
            "title": "anatomical location",
            "type": "Item"
        },
        "P928": {
            "title": "activating neurotransmitter",
            "type": "Item"
        },
        "P929": {
            "title": "color space",
            "type": "Item"
        },
        "P930": {
            "title": "type of electrification",
            "type": "Item"
        },
        "P931": {
            "title": "place served by transport hub",
            "type": "Item"
        },
        "P932": {
            "title": "PMCID",
            "type": "External identifier"
        },
        "P933": {
            "title": "heritagefoundation.ca ID",
            "type": "External identifier"
        },
        "P935": {
            "title": "Commons gallery",
            "type": "String"
        },
        "P937": {
            "title": "work location",
            "type": "Item"
        },
        "P938": {
            "title": "FishBase species ID",
            "type": "External identifier"
        },
        "P939": {
            "title": "KSH code",
            "type": "External identifier"
        },
        "P94": {
            "title": "coat of arms image",
            "type": "Commons media file"
        },
        "P940": {
            "title": "GHS precautionary statements (obsolete)",
            "type": "String"
        },
        "P941": {
            "title": "inspired by",
            "type": "Item"
        },
        "P942": {
            "title": "theme music",
            "type": "Item"
        },
        "P943": {
            "title": "programmer",
            "type": "Item"
        },
        "P944": {
            "title": "Code of nomenclature",
            "type": "Item"
        },
        "P945": {
            "title": "allegiance",
            "type": "Item"
        },
        "P946": {
            "title": "ISIN",
            "type": "String"
        },
        "P947": {
            "title": "RSL ID (person)",
            "type": "External identifier"
        },
        "P948": {
            "title": "page banner",
            "type": "Commons media file"
        },
        "P949": {
            "title": "National Library of Israel ID",
            "type": "External identifier"
        },
        "P950": {
            "title": "BNE ID",
            "type": "External identifier"
        },
        "P951": {
            "title": "NSZL ID",
            "type": "External identifier"
        },
        "P952": {
            "title": "ISCO occupation code",
            "type": "String"
        },
        "P953": {
            "title": "full work available at",
            "type": "URL"
        },
        "P954": {
            "title": "IBNR ID",
            "type": "External identifier"
        },
        "P957": {
            "title": "ISBN-10",
            "type": "External identifier"
        },
        "P958": {
            "title": "section, verse, or paragraph",
            "type": "String"
        },
        "P959": {
            "title": "MSW ID",
            "type": "External identifier"
        },
        "P960": {
            "title": "Tropicos ID",
            "type": "External identifier"
        },
        "P961": {
            "title": "IPNI plant ID",
            "type": "External identifier"
        },
        "P962": {
            "title": "MycoBank taxon name ID",
            "type": "External identifier"
        },
        "P963": {
            "title": "streaming media URL",
            "type": "URL"
        },
        "P964": {
            "title": "Austrian municipality key",
            "type": "External identifier"
        },
        "P965": {
            "title": "burial plot reference",
            "type": "String"
        },
        "P966": {
            "title": "MusicBrainz label ID",
            "type": "External identifier"
        },
        "P967": {
            "title": "guest of honor",
            "type": "Item"
        },
        "P968": {
            "title": "e-mail",
            "type": "URL"
        },
        "P969": {
            "title": "located at street address",
            "type": "String"
        },
        "P97": {
            "title": "noble title",
            "type": "Item"
        },
        "P970": {
            "title": "neurological function",
            "type": "Item"
        },
        "P971": {
            "title": "category combines topics",
            "type": "Item"
        },
        "P972": {
            "title": "catalog",
            "type": "Item"
        },
        "P973": {
            "title": "described at URL",
            "type": "URL"
        },
        "P974": {
            "title": "tributary",
            "type": "Item"
        },
        "P98": {
            "title": "editor",
            "type": "Item"
        },
        "P980": {
            "title": "code for weekend and holiday homes (Sweden)",
            "type": "External identifier"
        },
        "P981": {
            "title": "BAG-code for Dutch locations",
            "type": "External identifier"
        },
        "P982": {
            "title": "MusicBrainz area ID",
            "type": "External identifier"
        },
        "P984": {
            "title": "IOC country code",
            "type": "External identifier"
        },
        "P988": {
            "title": "Philippine Standard Geographic Code",
            "type": "External identifier"
        },
        "P989": {
            "title": "spoken text audio",
            "type": "Commons media file"
        },
        "P990": {
            "title": "audio recording of the subject's spoken voice",
            "type": "Commons media file"
        },
        "P991": {
            "title": "successful candidate",
            "type": "Item"
        },
        "P993": {
            "title": "NFPA Health",
            "type": "String"
        },
        "P994": {
            "title": "NFPA Fire",
            "type": "String"
        },
        "P995": {
            "title": "NFPA Instability",
            "type": "String"
        },
        "P996": {
            "title": "scanned file on Wikimedia Commons",
            "type": "Commons media file"
        },
        "P998": {
            "title": "DMOZ ID",
            "type": "External identifier"
        },
        "P999": {
            "title": "ARICNS",
            "type": "External identifier"
        }
    }
    
    constructor()
    {
    }

    getPropTitle(p: string)
    {
        if (this.properties[p]) {
            return this.properties[p]['title']
        }

        return null
    }

    getPropType(p: string)
    {
        if (this.properties[p]) {
            return this.properties[p]['type']
        }

        return null
    }
}
