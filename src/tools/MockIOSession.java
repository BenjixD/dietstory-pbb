/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
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
package tools;

import java.net.SocketAddress;

import org.apache.mina.common.CloseFuture;
import org.apache.mina.common.IoFilterChain;
import org.apache.mina.common.IoHandler;
import org.apache.mina.common.IoService;
import org.apache.mina.common.IoServiceConfig;
import org.apache.mina.common.IoSessionConfig;
import org.apache.mina.common.TransportType;
import org.apache.mina.common.WriteFuture;
import org.apache.mina.common.IoFilter.WriteRequest;
import org.apache.mina.common.support.BaseIoSession;

/**
 * Represents a mock version of an IOSession to use a MapleClient instance
 * without an active connection (faekchar, etc).
 *
 * Most methods return void, or when they return something, null. Therefore,
 * this class is mostly undocumented, due to the fact that each and every
 * function does squat.
 *
 * @author Frz
 * @since Revision 518
 * @version 1.0
 */
public class MockIOSession extends BaseIoSession {

    /**
     * Does nothing.
     */
    @Override
    protected void updateTrafficMask() {
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public IoSessionConfig getConfig() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public IoFilterChain getFilterChain() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public IoHandler getHandler() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public SocketAddress getLocalAddress() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public SocketAddress getRemoteAddress() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public IoService getService() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public SocketAddress getServiceAddress() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public IoServiceConfig getServiceConfig() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public TransportType getTransportType() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public CloseFuture close() {
        return null;
    }

    /**
     * Does nothing.
     */
    @Override
    protected void close0() {
    }

    /**
     * Does nothing.
     * @param message
     * @param remoteAddress
     * @return 
     */
    @Override
    public WriteFuture write(Object message, SocketAddress remoteAddress) {
        return null;
    }

    /**
     * "Fake writes" a packet to the client, only running the OnSend event of
     * the packet.
     * @param message
     * @return 
     */
    @Override
    public WriteFuture write(Object message) {
        return null;
    }

    /**
     * Does nothing.
     * @param writeRequest
     */
    @Override
    protected void write0(WriteRequest writeRequest) {
    }
}
