import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
  { id: '6', nama: 'Fajar Ramadhan', prodi: 'Teknologi Informasi' },
];

export default function MahasiswaScreen() {
  const [keyword, setKeyword] = useState('');

  const dataTerfilter = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.nama}>{item.nama}</Text>
      <Text style={styles.prodi}>{item.prodi}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Direktori Mahasiswa</Text>

      <TextInput
        style={styles.input}
        placeholder="Cari nama mahasiswa..."
        value={keyword}
        onChangeText={setKeyword}
        autoCorrect={false}
      />

      <FlatList
        data={dataTerfilter}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={<Text style={styles.empty}>Data tidak ditemukan!</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 22, fontWeight: '800', color: '#1E4E9C', marginBottom: 12 },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 14,
  },
  item: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  nama: { fontSize: 16, fontWeight: '700', color: '#222' },
  prodi: { fontSize: 14, color: '#666', marginTop: 2 },
  empty: { textAlign: 'center', marginTop: 30, fontSize: 16, color: '#999' },
});
