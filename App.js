import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  StatusBar,
  Platform,
  StyleSheet,
} from 'react-native';
import InfoCard from './src/components/InfoCard';
import MahasiswaScreen from './src/screens/MahasiswaScreen';

export default function App() {
  const [tab, setTab] = useState('q1');

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, tab === 'q1' && styles.tabActive]}
          onPress={() => setTab('q1')}
        >
          <Text style={[styles.tabText, tab === 'q1' && styles.tabTextActive]}>
            Soal 1: InfoCard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, tab === 'q2' && styles.tabActive]}
          onPress={() => setTab('q2')}
        >
          <Text style={[styles.tabText, tab === 'q2' && styles.tabTextActive]}>
            Soal 2: Pencarian
          </Text>
        </TouchableOpacity>
      </View>

      {tab === 'q1' ? (
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.heading}>Daftar Tugas</Text>

          <InfoCard
            title="Laporan Praktikum Jobsheet 04"
            status="selesai"
            onPress={() => Alert.alert('Detail', 'Laporan Praktikum Jobsheet 04 sudah selesai.')}
          />
          <InfoCard
            title="Project Aplikasi Mobile"
            status="proses"
            onPress={() => Alert.alert('Detail', 'Project Aplikasi Mobile masih dalam proses.')}
          />
          <InfoCard
            title="Presentasi UTS"
            status="proses"
            onPress={() => Alert.alert('Detail', 'Presentasi UTS masih dalam proses.')}
          />
        </ScrollView>
      ) : (
        <MahasiswaScreen />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F2F4F8',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 54,
  },
  tabs: { flexDirection: 'row', paddingHorizontal: 16, paddingTop: 8 },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  tabActive: { borderBottomColor: '#1E4E9C' },
  tabText: { fontSize: 14, color: '#777', fontWeight: '600' },
  tabTextActive: { color: '#1E4E9C' },
  content: { padding: 16 },
  heading: { fontSize: 22, fontWeight: '800', color: '#1E4E9C', marginBottom: 14 },
});
