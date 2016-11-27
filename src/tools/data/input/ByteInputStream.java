/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package tools.data.input;

/**
 * Represents an abstract stream of bytes.
 *
 * @author Frz
 * @version 1.0
 * @since Revision 323
 */
public interface ByteInputStream {

    /**
     * Reads the next byte off the stream.
     *
     * @return The next byte as an integer.
     */
    int readByte();

    /**
     * Gets the number of bytes read from the stream.
     *
     * @return The number of bytes as a long integer.
     */
    long getBytesRead();

    /**
     * Gets the number of bytes still left for reading.
     *
     * @return The number of bytes as a long integer.
     */
    long available();

    String toString(final boolean b);
}
