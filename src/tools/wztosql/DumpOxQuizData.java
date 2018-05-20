/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package tools.wztosql;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.CharsetEncoder;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Properties;

import constants.ServerConfig;
import lib.data.MapleData;
import lib.data.MapleDataProvider;
import lib.data.MapleDataProviderFactory;
import lib.data.MapleDataTool;
import net.DatabaseConnection;

import static tools.wztosql.DumpItems.getByte;
import static tools.wztosql.DumpItems.getShort;

/**
 *
 * @author Itzik
 */
public class DumpOxQuizData {

    private final Connection con = DatabaseConnection.getConnection();
    static CharsetEncoder asciiEncoder = Charset.forName("ISO-8859-1").newEncoder();

    public static void main(String args[]) throws FileNotFoundException, IOException, SQLException {
        //String output = args[0];
        //File outputDir = new File(output);
        //File cashTxt = new File("ox.sql");
        //outputDir.mkdir();
        //cashTxt.createNewFile();
        System.out.println("OXQuiz.img Loading ...");
        //try (PrintWriter writer = new PrintWriter(new FileOutputStream(cashTxt))) {
        //    writer.println("INSERT INTO `wz_oxdata` (`questionset`, `questionid`, `question`, `display`, `answer`) VALUES");

        Properties properties = new Properties();
        try {
            properties.load(new FileInputStream("config.properties"));
        } catch (IOException ex) {
            System.out.println("Failed to load config.properties");
        }

        // Load Server Configuration
        ServerConfig.IP_ADDRESS = properties.getProperty("ip");
        ServerConfig.SERVER_NAME = properties.getProperty("name");
        ServerConfig.EVENT_MSG = properties.getProperty("event");
        ServerConfig.SCROLL_MESSAGE = properties.getProperty("message");
        ServerConfig.MAX_CHARACTERS = getByte(properties, "characters");
        ServerConfig.USER_LIMIT = getShort(properties, "users");
        ServerConfig.CHANNEL_COUNT = getByte(properties, "channels");
        ServerConfig.SQL_PORT = properties.getProperty("sql_port");
        ServerConfig.SQL_USER = properties.getProperty("sql_user");
        ServerConfig.SQL_PASS = properties.getProperty("sql_password");
        ServerConfig.SQL_DATABASE = properties.getProperty("sql_db");
        ServerConfig.SQL_ENDPOINT = properties.getProperty("sql_endpoint");

        DumpOxQuizData dump = new DumpOxQuizData();
        dump.dumpOxData();
        //    writer.flush();
        //}
        System.out.println("Ox quiz data is complete");
    }

    public void dumpOxData() throws SQLException {
        MapleDataProvider stringProvider;
        stringProvider = MapleDataProviderFactory.getDataProvider("Etc.wz");
        MapleData ox = stringProvider.getData("OXQuiz.img");
        PreparedStatement ps = con.prepareStatement("DELETE FROM `wz_oxdata`");
        ps.execute();
        ps.close();
        for (MapleData child1 : ox.getChildren()) {
            for (MapleData child2 : child1.getChildren()) {
                MapleData q = child2.getChildByPath("q");
                MapleData d = child2.getChildByPath("d");
                int a = MapleDataTool.getInt(child2.getChildByPath("a"));
                String qs = "";
                String ds = "";
                String as;
                if (a == 0) {
                    as = "x";
                } else {
                    as = "o";
                }
                if (q != null) {
                    qs = (String) q.getData();
                }
                if (d != null) {
                    ds = (String) d.getData();
                }
                if (!asciiEncoder.canEncode(child1.getName()) || !asciiEncoder.canEncode(child2.getName())
                        || !asciiEncoder.canEncode(qs) || !asciiEncoder.canEncode(ds) || !asciiEncoder.canEncode(as)) {
                    continue;
                }
                ps = con.prepareStatement("INSERT INTO `wz_oxdata`"
                        + " (`questionset`, `questionid`, `question`, `display`, `answer`)"
                        + " VALUES (?, ?, ?, ?, ?)");
                ps.setString(1, child1.getName());
                ps.setString(2, child2.getName());
                ps.setString(3, qs);
                ps.setString(4, ds);
                ps.setString(5, as);
                ps.execute();
                ps.close();
                //writer.println("(" + child1.getName() + "," + child2.getName() + ", '" + qs + "', '" + ds + "', '" + as + "'), ");
            }
        }
    }
}
