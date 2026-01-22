import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { getApi, postApi } from '../services/api';

// Post type
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsScreen: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // 1️⃣ Create new post
  const createPost = async () => {
    setLoading(true);
    setError('');
    try {
      // Example post payload
      const newPost = await postApi<{ title: string; body: string; userId: number }, Post>(
        '/posts',
        {
          title: 'My New Post',
          body: 'This post was created via POST API',
          userId: 1,
        }
      );

      console.log('Created Post:', newPost);

      // 2️⃣ Fetch posts including the newly created one
      await fetchPosts(); // refresh list
    } catch (err) {
      console.error(err);
      setError('Failed to create post.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch posts from API
  const fetchPosts = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await getApi<Post[]>('/posts');
      setPosts(result);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch posts.');
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {error ? <Text style={{ color: 'red', marginBottom: 12 }}>{error}</Text> : null}
      <Button title="Create Post & Refresh" onPress={createPost} />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  item: { marginBottom: 12, padding: 12, backgroundColor: '#f1f1f1', borderRadius: 8 },
  title: { fontWeight: 'bold', marginBottom: 4 },
});
